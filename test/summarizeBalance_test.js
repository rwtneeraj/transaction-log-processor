import { getBalanceOfCurrId } from "../src/summarizeBalance.js";
import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";

describe("testing getBalanceOfCurrId", () => {
  test("should balance with negative sign, if account type is debit", () => {
    const sampleData = { type: "debit", amount: 200 };
    assertEquals(getBalanceOfCurrId(sampleData),-200)
  })

  test("should balance with positive sign, if account type is credit",() =>{
    const sampleData = { type: "credit", amount: 500 };
    assertEquals(getBalanceOfCurrId(sampleData),500)
  });
})