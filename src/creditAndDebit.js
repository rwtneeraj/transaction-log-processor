export const updateAmount = function (accountsBalance,transaction) {
  const detail = { ...accountsBalance };
  const { account, amount } = transaction;

  detail[account] = (detail[account] || 0) + amount;
  return detail;
 }


export const updateCreditAndDebit = function (summeries, transaction) {
  if (!transaction) {
    console.log("Error: Unable to process transactions.invalid transaction.")
    return summeries;
  }
  
  const { credit, debit } = summeries;
  const { type } = transaction;

  if (type === "debit") {
    summeries.debit = updateAmount(debit, transaction);
    return summeries;
  }

  if (type === "credit") {
    summeries.credit = updateAmount(credit, transaction);
    return summeries;
  }

  console.log("Invalid type:");
  return summeries;
};


