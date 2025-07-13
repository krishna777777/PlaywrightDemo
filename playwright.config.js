// @ts-check
import { chromium, defineConfig, devices, firefox } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  timeout :60*1000,
  // this is specific to the timeout for the assertions 
  expect :{
   timeout :30*1000,

  },
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
    browserName :'chromium',
    headless:true,

  },

  /* Configure projects for major browsers */
  

  
});

