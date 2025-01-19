import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import {updateAmount,updateCreditAndDebit } from "../src/creditAndDebit.js";
import { assert } from "jsr:@std/assert@^1.0.10/assert";

describe("testing updateAmount()", () => {
  test("should update  balance of current id. if transaction is there.", () => {
    const sampleData = { account: '01',amount: 800 };
    assertEquals(updateAmount({"01": 400 }, sampleData), {"01":1200 });
  })

  test("should update balance of current id if previus record not there.", () => {
    const sampleData = { account: '01',amount: 800 };
    assertEquals(updateAmount({}, sampleData), {"01":800 });
  })
});


describe("testing for updateCreditAndDebit ", () => {
  test("should update account balance in credit ,if transaction is credit", () => {
    const sampleData = { account : "T09", type: "credit", "amount": 500.00,}
    const oldBalanceInfo = { "credit": {}, "debit": {} };
    const expectedOutput = {"credit":{"T09" : 500.00},debit:{}}
    assertEquals(updateCreditAndDebit(oldBalanceInfo,sampleData),expectedOutput)
  });

  test("should update account balance in debit , if transaction is debit", () => {
    const sampleData = { account : "T09", type: "debit", "amount": 500.00,}
    const oldBalanceInfo = { "credit": {}, "debit": {} };
    const expectedOutput = {"credit":{},debit:{"T09" : 500.00}}
    assertEquals(updateCreditAndDebit(oldBalanceInfo,sampleData),expectedOutput)
  });
})