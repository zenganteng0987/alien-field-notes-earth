import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Tasted the ocean: endless salty soup, and the locals swim in it on purpose. Baffling, beautiful planet. 4/5, would come back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
