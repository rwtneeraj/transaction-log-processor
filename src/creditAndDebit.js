export const updateCreditAmount = function (credit, transaction) {
  const { id, amount } = transaction;
  const creditDetail = { ...credit };

  creditDetail[id] = (creditDetail[id] || 0) + amount;

  return creditDetail;
};

export const updateDebitAmount = function (debit, transaction) {
  const debitDetail = { ...debit };
  const { id, amount } = transaction;

  debitDetail[id] = (debitDetail[id] || 0) + amount;
  return debitDetail;
};

export const updateCreditAndDebit = function (summary, transaction) {
  const { credit, debit } = summary;
  const { type } = transaction;

  if (type === "debit") {
    summary.debit = updateDebitAmount(debit, transaction);
    return summary;
  }
  if (type === "credit") {
    summary.credit = updateCreditAmount(credit, transaction);
    return summary;
  }

  console.log("Invalid type:");
  return summary;
};
