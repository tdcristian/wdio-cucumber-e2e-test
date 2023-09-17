import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to inventory web app$/, async function () {
  await browser.url("https://www.saucedemo.com/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();

  await $('[id="user-name"]').setValue("standard_user");
  await $('[id="password"]').setValue("secret_sauce");
  await $('[id="login-button"]').click();

  await browser.pause(2000);

  /**Login with another user */
  // await browser.reloadSession();
  // await browser.url("https://www.saucedemo.com/");
  // await $('[id="user-name"]').setValue('problem_user')
  // await $('[id="password"]').setValue('secret_sauce')
  // await $('[id="login-button"]').click();
  // await browser.pause(2000);

  //** Refresh browser */
  // await browser.refresh();
  // await browser.pause(2000);

  //**browser back forward */
  // await browser.back();
  // await browser.forward();
});
