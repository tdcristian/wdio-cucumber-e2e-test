import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (noOfProducts) {
  if (!noOfProducts) {
    throw new Error("Invalid product count provided");
  }

  let eleArr = await $$(".inventory_item");
  chai.expect(eleArr.length).to.equal(parseInt(noOfProducts));
});

Then(/Validate all products have valid price/, async function () {
  let eleArr = await $$(".inventory_item_price");
  let priceStrArr = [];
  for (let i = 0; i < eleArr.length; i++) {
    let priceStr = await eleArr[i].getText();
    priceStrArr.push(priceStr);
  }
  console.log(">>Price with $: " + priceStrArr);

  let priceNumArr = priceStrArr.map((ele) => +ele.replace("$", ""));
  console.log(`>>Price in number: ${priceNumArr}`);

  let invalidPriceArr = priceNumArr.filter((ele) => ele <= 0);
  chai.expect(invalidPriceArr.length).to.equal(0);
});
