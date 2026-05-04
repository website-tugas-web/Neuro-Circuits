/**
 * AWS S3 + CloudFront deployment configuration for the MedReflexed frontend.
 * 
 * Usage:
 * AWS_REGION=us-east-1 AWS_S3_BUCKET=medreflexed-frontend AWS_DISTRIBUTION_ID=XXXXX npx ts-node aws-deploy.ts
 */

import * as fs from "fs";
import * as path from "path";
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { CloudFrontClient, CreateInvalidationCommand } from "@aws-sdk/client-cloudfront";

const region = process.env.AWS_REGION || "us-east-1";
const bucket = process.env.AWS_S3_BUCKET || "medreflexed-frontend";
const distributionId = process.env.AWS_DISTRIBUTION_ID || "";

if (!distributionId) {
  console.error(
    "Error: AWS_DISTRIBUTION_ID environment variable is required for CloudFront invalidation"
  );
  process.exit(1);
}

const s3Client = new S3Client({ region });
const cfClient = new CloudFrontClient({ region });

async function uploadDir(dirPath: string, s3Prefix = ""): Promise<string[]> {
  const files = fs.readdirSync(dirPath);
  const uploadedFiles: string[] = [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    const s3Key = path.join(s3Prefix, file).replace(/\\/g, "/");

    if (stats.isDirectory()) {
      uploadedFiles.push(...(await uploadDir(filePath, s3Key)));
    } else {
      const fileContent = fs.readFileSync(filePath);
      const contentType = getContentType(file);

      try {
        await s3Client.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: s3Key,
            Body: fileContent,
            ContentType: contentType,
            CacheControl:
              file.includes(".") && !file.match(/\.(html|map)$/)
                ? "public, max-age=31536000, immutable"
                : "public, max-age=3600, must-revalidate",
          })
        );
        console.log(`✓ Uploaded ${s3Key}`);
        uploadedFiles.push(s3Key);
      } catch (error) {
        console.error(`✗ Failed to upload ${s3Key}:`, error);
        throw error;
      }
    }
  }

  return uploadedFiles;
}

function getContentType(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const mimeTypes: Record<string, string> = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };
  return mimeTypes[ext] || "application/octet-stream";
}

async function invalidateCloudFront(): Promise<void> {
  try {
    await cfClient.send(
      new CreateInvalidationCommand({
        DistributionId: distributionId,
        InvalidationBatch: {
          Paths: {
            Quantity: 1,
            Items: ["/*"],
          },
          CallerReference: `deployment-${Date.now()}`,
        },
      })
    );
    console.log("✓ CloudFront cache invalidated");
  } catch (error) {
    console.error("✗ CloudFront invalidation failed:", error);
    throw error;
  }
}

async function deploy(): Promise<void> {
  const buildDir = path.join(process.cwd(), ".next", "static");

  if (!fs.existsSync(buildDir)) {
    console.error("Error: .next/static not found. Run 'npm run build' first.");
    process.exit(1);
  }

  console.log(`📦 Deploying to S3 bucket: ${bucket}`);
  const uploadedFiles = await uploadDir(buildDir, "_next");
  console.log(`\n✓ Deployed ${uploadedFiles.length} files to S3`);

  console.log("\n🔄 Invalidating CloudFront cache...");
  await invalidateCloudFront();

  console.log("\n✅ Deployment complete!");
  console.log(`Frontend will be available at: https://medreflexed.example.com`);
}

deploy().catch((error) => {
  console.error("Deployment failed:", error);
  process.exit(1);
});
