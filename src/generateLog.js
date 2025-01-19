import { parseFile } from "./parseFile.js";
import { updateBalances } from "./accountBalances.js";
import { updateCreditAndDebit } from "./creditAndDebit.js";
import { financialSummary } from "./template.js";
import { updateTransactionBreakdown } from "./TransactionsBreakdown.js";
import { getTagSummary } from "./tagSummary.js";

const main = function () {
  const path = "../data/transactionLog.json";
  const content = parseFile(path);
  const summary = financialSummary();

  content.transactions.forEach((transaction) => {
    let { balances, creditDebit, breakdown ,tags} = summary;
    balances = updateBalances(balances, transaction);
    creditDebit = updateCreditAndDebit(creditDebit, transaction);
    breakdown = updateTransactionBreakdown(breakdown, transaction);
    tags = getTagSummary(tags,transaction);
    
  });

  console.log(summary)
};

main();
