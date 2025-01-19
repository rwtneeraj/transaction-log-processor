import { parseFile } from "./parseFile.js";
import { updateBalances } from "./accountBalances.js";
import { updateCreditAndDebit } from "./creditAndDebit.js";
import { financialSummary } from "./template.js";

const main = function () {
  const path = "../data/transactionLog.json";
  const content = parseFile(path);
  const summary = financialSummary();
  
  content.transactions.forEach((transaction) => {
    summary['balances'] = updateBalances(summary['balances'], transaction);
    summary['totalCreditAndDebit'] = updateCreditAndDebit(
      summary['totalCreditAndDebit'],
      transaction
    );
  });
};

main();
