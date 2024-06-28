import { test as base } from "@playwright/test";

const test = base.extend({
  electronApp: async ({ playwright }, use) => {
    const app = await playwright._electron.launch({
      args: ["../electron-window-app.js"],
    });

    await use(app);

    await app.close();
  },
});

test("should work", async ({ electronApp }) => {});
