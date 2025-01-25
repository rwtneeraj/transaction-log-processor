export const financialSummary = function () {
  return {
    balances: {},
    creditDebit: { credit: {}, debit: {} },
    breakdown: {
      totalTransaction: 0,
      creditTransaction: 0,
      debitTransaction: 0,
    },
    tags: {},
  };
};
