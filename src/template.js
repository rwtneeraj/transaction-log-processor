export const templateForTagSummary = function () {
  return {
    salary: 0,
    groceries: 0,
    bonus: 0,
    rent: 0,
    "entertainment/movies": 0,
    "shopping/clothes": 0,
    snacks: 0,
    freelance: 0,
    refund: 0,
    "utilities/electricity": 0
  };
};

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
