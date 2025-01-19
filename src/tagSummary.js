export const getTagSummary = function (tags, transaction) {
  if (!transaction) { return tags; };
  const tag = transaction.tags.join("/");
  tags[tag] = transaction.amount;
  return tags
}