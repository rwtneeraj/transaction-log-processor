import { describe, test } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { parseFile } from "../src/parseFile.js";

const files = {
  "./data/transaction1Log.json": `[{"transaction" : [{"id" : "TXN009"},{"id":"TXN010"}]}]`,
  "./data/transaction2Log.json": `{ "account": "ACC001" }`,
  "./data/transaction3Log.json": `["timestamp", "2025-01-01T10:00:00Z"]`,
};

describe("testing parsFile", () => {

  test("should data in js object when data in array of objects in json.", () => {
    const oldReadFile = Deno.readTextFileSync;
    Deno.readTextFileSync = (file) => files[file];
    const sampleData = "./data/transaction1Log.json";
    assertEquals(parseFile(sampleData), [
      { transaction: [{ id: "TXN009" }, { id: "TXN010" }] },
    ]);
    Deno.readTextFileSync = oldReadFile;
  });

  test("should data in js object when data in  objects in json.", () => {
    const oldReadFile = Deno.readTextFileSync;
    Deno.readTextFileSync = (file) => files[file];
    const sampleData = "./data/transaction2Log.json";
    assertEquals(parseFile(sampleData), { account: "ACC001" });
    Deno.readTextFileSync = oldReadFile;
  });

  test("should data in js object when data in array in json.", () => {
    const oldReadFile = Deno.readTextFileSync;
    Deno.readTextFileSync = (file) => files[file];
    const sampleData = "./data/transaction3Log.json";
    assertEquals(parseFile(sampleData), ["timestamp", "2025-01-01T10:00:00Z"]);
    Deno.readTextFileSync = oldReadFile;
  });

  test("should catch error and return msg, if file is missing or malformed,", () => {
    const oldReadFile = Deno.readTextFileSync;
    Deno.readTextFileSync = (file) => files[file];
    const sampleData = "./data";
    const expectedOutput = `Error: Unable to process transactions. Please check the file and try again.`
    assertEquals(parseFile(sampleData), expectedOutput);
    Deno.readTextFileSync = oldReadFile;
  });
});
