import quibble from "quibble";

async function repro() {
  quibble.esm("./replaced.mjs", {
    replaceMe: function () {
      console.log("a local import was properly replaced");
    },
  });

  quibble.esm("fs", {
    readFileSync: function (path) {
      console.log("using quibbled readFileSyns... yay!");
      return "Looks like 'fs' was replaced correctly.";
    },
  });

  console.log(""); // force a newline for readability
  const index = await import("./index.mjs");
}

repro();
