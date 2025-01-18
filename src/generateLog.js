
const readJsonFile = file => Deno.readTextFileSync(file);

export const parseFile = (file) => {
  const content = readJsonFile(file);
  return JSON.parse(content);
};

// parseFile("../data/transactionLog.json");
