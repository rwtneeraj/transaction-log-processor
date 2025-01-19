import { getBalanceOfCurrId, updateBalances } from "../src/accountBalances.js";
import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";

describe("testing getBalanceOfCurrId", () => {
  test("should balance with negative sign, if account type is debit", () => {
    const sampleData = { type: "debit", amount: 200 };
    assertEquals(getBalanceOfCurrId(sampleData), -200);
  });

  test("should balance with positive sign, if account type is credit", () => {
    const sampleData = { type: "credit", amount: 500 };
    assertEquals(getBalanceOfCurrId(sampleData), 500);
  });

  test("should throw error , if account type is invalid", () => {
    const sampleData = { id: "TXN001", type: "Null", amount: 500 };
    assertEquals(getBalanceOfCurrId(sampleData), 0);
  });
});

describe("testing updateBalances()", () => {
  test("should decrease the balance of user, if transaction type is debit", () => {
    const sampleData = { id: "TXN001", type: "debit", amount: 1200.0 };
    assertEquals(updateBalances({ TXN001: 1500 }, sampleData), { TXN001: 300 });
  });

  test("should decrease the balance of user, if transaction type is debit", () => {
    const sampleData = { id: "TXN002", type: "credit", amount: 1200.0 };
    assertEquals(updateBalances({ TXN002: 0 }, sampleData), { TXN002: 1200 });
  });

  test("should catch error , if data is invalid", () => {
    const expectedOutput = {};
    assertEquals(updateBalances({},NaN),expectedOutput);
  });
});
