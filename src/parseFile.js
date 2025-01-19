const readJsonFile = file => Deno.readTextFileSync(file);

export const parseFile = (file) => {
  try {
    const content = readJsonFile(file);
    return JSON.parse(content);
  } catch {
    return `Error: Unable to process transactions. Please check the file and try again.`
  }
};
