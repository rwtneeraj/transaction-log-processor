export const templateForTagSummary = function () {
  return {
    salary: 0,
    groceries: 0,
    bonus: 0,
    rent: 0,
    entertainmentMovies: 0,
    shoppingClothes: 0,
    snacks: 0,
    freelance: 0,
    refund: 0,
  };
};

export const financialSummary = function () {
  return {
    balances: {},
    totalCreditAndDebit: { credit: {}, debit: {} },
    total: { totalTransaction: 0, creditTransaction: 0, debitTransaction: 0 },
  };
};
