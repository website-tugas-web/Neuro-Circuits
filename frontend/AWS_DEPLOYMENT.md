# AWS S3 + CloudFront Deployment

This guide explains how to set up and deploy the MedReflexed frontend to AWS S3 with CloudFront CDN.

## Prerequisites

1. AWS Account with appropriate permissions
2. AWS CLI configured with credentials
3. Node.js >= 18.0.0
4. AWS SDK packages installed (`npm install`)

## Architecture

```
Frontend (Next.js) → S3 Bucket → CloudFront Distribution → Users
```

- **S3 Bucket**: Stores static files and Next.js build output
- **CloudFront**: CDN that caches and serves content globally
- **Environment Variables**: AWS credentials and configuration

## Setup

### 1. Create S3 Bucket

```bash
# Create bucket (replace with your domain)
aws s3 mb s3://medreflexed-frontend --region us-east-1

# Enable versioning
aws s3api put-bucket-versioning \
  --bucket medreflexed-frontend \
  --versioning-configuration Status=Enabled

# Block public access (CloudFront will serve through OAI)
aws s3api put-public-access-block \
  --bucket medreflexed-frontend \
  --public-access-block-configuration \
  "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

# Enable server-side encryption
aws s3api put-bucket-encryption \
  --bucket medreflexed-frontend \
  --server-side-encryption-configuration '{
    "Rules": [{
      "ApplyServerSideEncryptionByDefault": {
        "SSEAlgorithm": "AES256"
      }
    }]
  }'
```

### 2. Create CloudFront Distribution

```bash
# Create origin access identity (OAI)
aws cloudfront create-cloud-front-origin-access-identity \
  --cloud-front-origin-access-identity-config \
  CallerReference=medreflexed-frontend

# Create distribution (use AWS Console or CLI)
# Key settings:
# - Origin: S3 bucket
# - Origin Access Identity: Use the OAI from above
# - Default Root Object: index.html
# - Error Pages: 404.html → 404
# - Cache Behavior: .js/.css files → 1 year, HTML → 1 hour
```

### 3. Bucket Policy

Allow CloudFront OAI to read objects:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity EXAMPLEID"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::medreflexed-frontend/*"
    },
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity EXAMPLEID"
      },
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::medreflexed-frontend"
    }
  ]
}
```

## Local Deployment

### Build

```bash
npm run build
```

### Deploy

```bash
# Set environment variables
export AWS_REGION=us-east-1
export AWS_S3_BUCKET=medreflexed-frontend
export AWS_DISTRIBUTION_ID=E1234EXAMPLE

# Run deployment
npm run deploy
```

## GitHub Actions Deployment

Configure GitHub Secrets:

1. Go to Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `AWS_ACCESS_KEY_ID`: Your AWS access key
   - `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
   - `AWS_REGION`: us-east-1
   - `AWS_S3_BUCKET`: medreflexed-frontend
   - `AWS_DISTRIBUTION_ID`: Your CloudFront distribution ID

3. The frontend-ci.yml workflow will deploy on push to main

## Caching Strategy

- **HTML files** (index.html): Cache for 1 hour, must revalidate
- **JS/CSS files** (.js, .css): Cache for 1 year (immutable)
- **Images/fonts**: Cache for 30 days
- **Other files**: Cache for 1 hour

This is configured in the `aws-deploy.ts` script via CacheControl headers.

## Monitoring

### CloudFront Metrics

```bash
# View distribution ID
aws cloudfront list-distributions --query 'DistributionList.Items[?DomainName==`medreflexed-frontend.s3.amazonaws.com`].Id'

# Check distribution status
aws cloudfront get-distribution --id E1234EXAMPLE
```

### Access Logs

Enable CloudFront access logs to S3 for monitoring traffic and debugging.

## Troubleshooting

### Files not updating after deployment

CloudFront caches files. Invalidate the cache:

```bash
aws cloudfront create-invalidation \
  --distribution-id E1234EXAMPLE \
  --paths "/*"
```

### CORS Issues

If frontend needs to call APIs from different domain, add CORS headers to S3 objects or use API Gateway.

### 404 Errors

Ensure `next.config.ts` is properly configured and `404.html` exists in the build output.

## Cost Optimization

1. **Use CloudFront**: Reduces data transfer costs
2. **Enable compression**: CloudFront automatically compresses text files
3. **Set appropriate cache TTLs**: Balance between freshness and cost
4. **Monitor usage**: Set up CloudWatch alarms for unexpected traffic

## Production Checklist

- [ ] S3 bucket created with encryption enabled
- [ ] CloudFront distribution created with OAI
- [ ] Bucket policy allows CloudFront OAI
- [ ] Domain/DNS configured (if using custom domain)
- [ ] SSL/TLS certificate configured in CloudFront
- [ ] GitHub Secrets configured for CI/CD
- [ ] Environment variables set in deployment script
- [ ] Cache headers configured correctly
- [ ] Error pages configured
- [ ] Monitoring/logging enabled
- [ ] Backup plan for rollback

## References

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [CloudFront Origin Access Identity](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
