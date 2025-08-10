import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://www.saucedemo.com/",
    headless: false,
  },
  projects: [
    { name: "Chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "Firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "WebKit", use: { ...devices["Desktop Safari"] } },
  ],
});
