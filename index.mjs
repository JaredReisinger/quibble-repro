import fs from "fs";
import { replaceMe } from "./replaced.mjs";

// console.dir(fs);

export function main() {
  console.log("This is main...");
  replaceMe();

  const pkg = fs.readFileSync("./README.md");
  console.log(`\nfrom README:\n------------\n${pkg.toString()}------------`);
}

main();
