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

Then(/^Click on first the first search result$/, async function () {
  let ele = await $(`<h3>`);
  await ele.click();
  await browser.pause(1000);
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`>> ExpectedURL: ${expectedURL}`);
  await browser.waitUntil(
    async function () {
      return (
        (await browser.getTitle()) ===
        "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
      );
    },
    { timeout: 5000, interval: 500, timeoutMsg: "Title not loaded"}
  );
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
  await browser.pause(1000);
});

Given(/^A web page is opened$/, async function () {
  // await browser.url("https://the-internet.herokuapp.com/tables");
  await browser.url("https://www.amazon.com/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
});

When(/^Perform a web interactions$/, async function () {
  // let rowCount = await $$('//table[@id="table1"]/tbody/tr').length;
  // chai.expect(rowCount).to.equal(4);
  // let colCount = await $$('//table[@id="table1"]/thead/tr/th').length;
  // chai.expect(colCount).to.equal(6);

  // console.log(">> rowCount:" + rowCount);
  // console.log(">> colCount:" + colCount);

  /**Get the whole table data */
  // let arr = [];

  // for (let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };

  //   for (let j = 0; j < colCount; j++) {
  //     let celVal = await $(
  //       `//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     ).getText();

  //     if (j === 0) personObj.lastname = celVal;
  //     if (j === 1) personObj.firstname = celVal;
  //     if (j === 2) personObj.email = celVal;
  //     if (j === 3) personObj.due = celVal;
  //     if (j === 4) personObj.web = celVal;
  //   }
  //   arr.push(personObj);
  // }
  // console.log(`Whole table: ${JSON.stringify(arr)}`);

  /**Get single row based on a condition */

  // let arr = [];

  // for (let i = 0; i < rowCount; i++) {
  //   let personObj = {
  //     lastname: "",
  //     firstname: "",
  //     email: "",
  //     due: "",
  //     web: "",
  //   };

  //   for (let j = 0; j < colCount; j++) {
  //     let celVal = await $(
  //       `//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`
  //     ).getText();
  //     let firstname = await (
  //       await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${2}]`)
  //     ).getText();
  //     if (firstname === "Jason") {
  //       if (j === 0) personObj.lastname = celVal;
  //       if (j === 1) personObj.firstname = celVal;
  //       if (j === 2) personObj.email = celVal;
  //       if (j === 3) personObj.due = celVal;
  //       if (j === 4) personObj.web = celVal;
  //     }
  //   }
  //   if (personObj.firstname) {
  //     arr.push(personObj);
  //   }
  // }
  // console.log(`Whole table: ${JSON.stringify(arr)}`);

  /**Get the single column */
  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let celVal = await $(
  //     `//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`
  //   ).getText();

  //   arr.push(celVal);
  // }

  // console.log(`>> Column values: ${JSON.stringify(arr)}`);

  /** Get single cell value (based on another cell) */

  // let arr = [];
  // for (let i = 0; i < rowCount; i++) {
  //   let price = await $(
  //     `//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`
  //   ).getText();
  //   let firstname = await $(
  //     `//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`
  //   ).getText();
  //   if (+price.replace("$", "") > 50) {
  //     arr.push(firstname);
  //   }
  // }

  // console.log(`>> Column values: ${JSON.stringify(arr)}`);

  /** scrollBy */
  await browser.execute(() => {
    window.scrollBy(0, window.innerHeight);
  });

  await browser.pause(1000);
  await browser.execute(() => {
    window.scrollBy(0, -window.innerHeight);
  });

  await browser.pause(1000);
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  await browser.pause(1000);
  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollTop);
  });

  await browser.pause(1000);
});
