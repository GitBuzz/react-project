var shell = require("shelljs");
var chalk = require("chalk");
const nodeVersion = "12.18.2";
const npmVersion = "6.14.5";

// Verify is the project is under Git
function verifyGit() {
  if (!shell.which("git")) {
    shell.echo(chalk.red("Sorry, this script requires git"));
    shell.exit(1);
  } else {
    shell.echo(chalk.green("Your project is under Git source control"));
  }
}

// Install dependencies
function installDependencies() {
  if (shell.exec("npm install").code !== 0) {
    shell.echo(
      chalk.red(
        `Error: You should have Node version: ${nodeVersion} or greater and NPM version: ${npmVersion} or greater.`
      )
    );
    shell.exit(1);
  } else {
    shell.echo(chalk.green("Dependencies installed succesfully"));
  }
}

// Run Configuration
function runConfig() {
  process.stdout.write(
    chalk.cyan(
      `\nDo you want to run the configuration script? 🛠 \nIf you are going to develop a React application type "Y". \nIf you want to contribute and help us then type "n" (You can run "npm config" later manually.). [Y/n] `
    )
  );
  process.stdin.resume();
  process.stdin.on("data", (pData) => {
    const answer = pData.toString().trim().toLowerCase() || "y";
    if (answer == "y") {
      shell.echo(`\nYour project is being configured... ✅`);
      shell.exec("npm run config");
    } else if (answer == "n") {
      console.log(
        chalk.green(
          `\n\nThanks for helping us with your contribution, you can start adding features, code or fixing issues.`
        )
      );
      process.exit(0);
    } else {
      console.log(
        chalk.red(
          `\nPlease answer with "Y" or "n", run "npm run start" command to start your project configuration again.`
        )
      );
      process.exit(0);
    }
  });
}

(async () => {
  try {
    verifyGit();
    installDependencies();
    runConfig();
  } catch (err) {
    console.log(err);
  }
})();
