import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My cat pushed my glass off the table, held eye contact the whole way down, and I apologized first.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

const length = [...joke].length;
if (length < MIN_LENGTH || length > MAX_LENGTH) {
  throw new Error(`joke must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
