const fs = require("fs-extra");
const shell = require("shelljs");

// creating @kalakari folder in project node_modules

shell.mkdir("-p", "./node_modules/@kalakari");

// deleting if any thing is there. I think this will never happen,
// will clean up later
shell.rm("-rf", "./node_modules/@kalakari/*");

// Copying the build @kalakari bundle from  kalakari project
// -R stands for recursive
// L stands for follow symlink
// f is forcefully default mode of shelljs.

shell.cp(
  "-RLf",
  "./kalakari/node_modules/@kalakari/*",
  "./node_modules/@kalakari"
);

function cleanup() {
  // just remove the cloned kalakari project
  shell.rm("-rf", "./kalakari");
}

cleanup();
