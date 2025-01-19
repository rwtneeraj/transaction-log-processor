export const updateTransactionBreakdown = function (breakdown, transaction) {
  breakdown["totalTransaction"] += 1;

  if (transaction.type === "debit") {
    breakdown["debitTransaction"] += 1;
    return breakdown;
  }
  
  breakdown["creditTransaction"] += 1;
  return breakdown;
}