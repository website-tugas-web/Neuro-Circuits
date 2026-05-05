const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const consoleMessages = [];
  const errors = [];

  // Capture console messages
  page.on('console', msg => {
    consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
  });

  // Capture page errors
  page.on('pageerror', error => {
    errors.push(`Page Error: ${error.message}\nStack: ${error.stack}`);
  });

  console.log('=== Opening test.html ===');
  await page.goto('http://localhost:8000/test.html', { waitUntil: 'networkidle' });

  await page.waitForTimeout(1000);

  console.log('\n=== Console Output After Page Load ===');
  if (consoleMessages.length === 0 && errors.length === 0) {
    console.log('✓ Console clean - no errors or warnings');
  } else {
    consoleMessages.forEach(msg => console.log(msg));
    errors.forEach(err => console.log(err));
  }

  console.log('\n=== Checking app object ===');
  const appDefined = await page.evaluate(() => typeof window.app !== 'undefined');
  console.log(`app object defined: ${appDefined}`);

  if (appDefined) {
    const hasStartQuiz = await page.evaluate(() => typeof window.app.startQuiz === 'function');
    console.log(`app.startQuiz is a function: ${hasStartQuiz}`);
  }

  console.log('\n=== Clicking Start Button ===');
  const startButton = await page.locator('button:has-text("Start Test")');
  const buttonExists = await startButton.count() > 0;

  if (!buttonExists) {
    console.log('✗ ERROR: Start button not found!');
    await browser.close();
    process.exit(1);
  }

  // Clear errors array before clicking
  const errorsBefore = errors.length;
  await startButton.click();
  await page.waitForTimeout(1500);

  if (errors.length > errorsBefore) {
    console.log('✗ JavaScript errors after clicking:');
    errors.slice(errorsBefore).forEach(err => console.log('  ' + err));
  }

  // Check if quiz started
  const questionVisible = await page.locator('#question-text').isVisible();
  if (questionVisible) {
    console.log('✓ Quiz started successfully - question container is visible');

    const questionText = await page.locator('#question-text').textContent();
    console.log(`✓ First question loaded: "${questionText.substring(0, 50)}..."`);

    console.log('\n=== Answering Questions ===');
    // Answer 25 questions by clicking first option each time
    for (let i = 0; i < 25; i++) {
      await page.waitForTimeout(500);

      // Try multiple selectors for options
      let firstOption = await page.locator('.option').first();
      if (await firstOption.count() === 0) {
        firstOption = await page.locator('[class*="option"]').first();
      }
      if (await firstOption.count() === 0) {
        firstOption = await page.locator('#options-container > *').first();
      }

      if (await firstOption.count() > 0) {
        await firstOption.click();
        console.log(`✓ Answered question ${i + 1}/25`);
        await page.waitForTimeout(800);
      } else {
        console.log(`! No options found for question ${i + 1}`);
        const html = await page.locator('#options-container').innerHTML();
        console.log(`Options container HTML: ${html.substring(0, 100)}...`);
        break;
      }
    }

    console.log('\n=== Checking Results Page ===');
    await page.waitForTimeout(3000);

    // Check if test is still showing
    const testVisible = await page.locator('#test-container').isVisible();
    console.log(`Test container visible: ${testVisible}`);

    const resultsVisible = await page.locator('#result-container').isVisible();
    console.log(`Results container visible: ${resultsVisible}`);

    if (resultsVisible) {
      const scoreText = await page.locator('#final-score').textContent();
      console.log(`✓ Results page displayed with score: ${scoreText}`);
    } else if (testVisible) {
      console.log('! Test still visible after all questions');
      // Check for submit button or similar
      const submitBtn = await page.locator('button:has-text("Submit")');
      if (await submitBtn.count() > 0) {
        console.log('Found Submit button, clicking...');
        await submitBtn.click();
        await page.waitForTimeout(2000);
        const resultsAfter = await page.locator('#result-container').isVisible();
        if (resultsAfter) {
          const scoreText = await page.locator('#final-score').textContent();
          console.log(`✓ Results page displayed after submit with score: ${scoreText}`);
        }
      } else {
        console.log('✗ No Submit button found and results not showing');
      }
    } else {
      console.log('✗ Neither test nor results container visible');
    }

  } else {
    console.log('✗ ERROR: Quiz did not start - question container not visible');
    console.log('\n=== Debugging Info ===');
    console.log('Start container display:', await page.locator('#start-container').getAttribute('style'));
    console.log('Test container display:', await page.locator('#test-container').getAttribute('style'));
  }

  console.log('\n=== Final Console State ===');
  if (consoleMessages.length === 0 && errors.length === 0) {
    console.log('✓ Console remains clean');
  } else {
    console.log('Console messages:', consoleMessages.length);
    console.log('Errors:', errors.length);
  }

  await browser.close();
  console.log('\n=== Test Complete ===');
})();
