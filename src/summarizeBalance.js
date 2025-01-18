const isValidType = function (type) {
  return type === "debit" || type === "credit";
};

export const getBalanceOfCurrId = function (transaction) {
  try {
    if (isValidType(transaction.type)) {
      return transaction.type === "debit"
        ? -transaction.amount
        : transaction.amount;
    }
    throw `invalid type`
  } catch(error) {
    return `Transaction ID ${transaction.id} has invalid data: ${error}`;
  }
};

// const update
