const isValidType = function (type) {
  return type === "debit" || type === "credit";
};

const isValidAmount = function (amount) {
  return amount >= 0;
};

export const getBalanceOfCurrId = function (transaction) {
  if (!isValidType(transaction.type) || !isValidAmount(transaction.amount)) {
    console.log(`Transaction ID ${transaction.id} has invalid data.`);
    return 0;
  }

  return transaction.type === "debit"
    ? -transaction.amount
    : transaction.amount;
};

export const updateBalances = function (balances, transaction) {
  try {
    if (!transaction) {
      throw `invalid data`;
    }

    const currentBalance = getBalanceOfCurrId(transaction);
    const previusBalance = balances[transaction.account] || 0;
    balances[transaction.account] = previusBalance + currentBalance;

    return balances;
  } catch (error) {
    console.log(`error : transactions has ${error}`); 
    return balances;
  }
};
