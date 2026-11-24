import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "My cat pushed my glass off the table, held eye contact the whole way down, and I apologized first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
