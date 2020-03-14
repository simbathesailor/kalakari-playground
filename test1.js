const execa = require("execa");
const fs = require("fs-extra");
const ora = require("ora");
const chalk = require("chalk");

// https://stackoverflow.com/questions/4565700/how-to-specify-the-private-ssh-key-to-use-when-executing-shell-command-on-git

const spinner = ora(chalk.green(`Downloading kalakari `)).start();

const cloned = execa.commandSync(
  "git clone -b v1.4 git@github.com:simbathesailor/kalakari.git  --depth 1"
);

spinner.succeed("Done downloading kalakari");

function buildkalakari() {
  const spinner1 = ora(chalk.green(`creating production build `)).start();

  const val = execa.commandSync("yarn run build:prod", {
    cwd: "./kalakari/"
  });

  process.stdout.write(val.stdout);

  spinner1.succeed("Done build kalakari");
  // spinner1.stop()
}

buildkalakari();

const spinner2 = ora(
  chalk.green(`copy the @kalakari to node_modules `)
).start();

fs.copy("./kalakari/node_modules/@kalakari", "./node_modules/", err => {
  if (err) {
    console.log("err", err);
  }
  spinner2.succeed(chalk.green("success !!"));
  // spinner2.stop()
});

// Idea is
// just one line in package.json should copy the code and run the
// build and copy node_modules/@kalakari in current node_modules/

// But how, will it happen ?
