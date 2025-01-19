import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { updateTransactionBreakdown } from "../src/TransactionsBreakdown.js";

describe("testing updateTransactionBreakdown()", () => {
  test("should update transaction detail", () => {
    const sampleData = { type: "credit" };
    const transactionInfo = { totalTransaction: 0, creditTransaction: 0, debitTransaction: 0 };
    const expectedOutput = {totalTransaction: 1, creditTransaction: 1, debitTransaction: 0 }
    assertEquals(updateTransactionBreakdown(transactionInfo,sampleData),expectedOutput)
  })
  
  test("should update transaction detail", () => {
    const sampleData = { type: "debit" };
    const transactionInfo = { totalTransaction: 0, creditTransaction: 0, debitTransaction: 0 };
    const expectedOutput = {totalTransaction: 1, creditTransaction: 0, debitTransaction: 1 }
    assertEquals(updateTransactionBreakdown(transactionInfo,sampleData),expectedOutput)
  })
})