import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is open$/, async function () {
  await browser.url("https://www.google.com");
  // await browser.maximizeWindow();
  await browser.pause(1000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>>> searchItem:  ${searchItem}`);
  let button = await $('//*[@id="L2AGLb"]/div');
  await button.scrollIntoView();
  await button.click();
  let ele = await $('[name="q"]');
  await ele.setValue(searchItem);
  await browser.pause(1000);
  await browser.keys("Enter");
  await browser.pause(1000);
});

Then(/^Click on first the first search result$/, async function() {
  let ele = await $(`<h3>`);
  await ele.click();
  await browser.pause(1000);
})

Then(/^URL should match (.*)$/, async function(expectedURL) {
  console.log(`>> ExpectedURL: ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
  await browser.pause(1000);
})