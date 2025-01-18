
export const getBalanceOfCurrId = function (transaction) {
  return "debit" in transaction ? 0 : transaction.amount;
};

