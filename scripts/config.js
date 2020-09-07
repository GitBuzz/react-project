var shell = require("shelljs");
var chalk = require("chalk");

// Verify is the project is under Git
function verifyGit() {
  if (!shell.which("git")) {
    shell.echo(chalk.red("Sorry, this script requires git."));
    shell.exit(1);
  } else {
    shell.echo(chalk.green("We are removing the Git directory repository."));
  }
}

// Remove Git
function removeGit() {
  if (shell.rm("-rf", ".git/").code !== 0) {
    shell.echo(
      shell.red(`We can't remove Git because you don't have a Git repository.`)
    );
    shell.exit(1);
  } else {
    console.log(chalk.green("Git removed."));
  }
}

// Ask if the user want a new git repo
function newRepo() {
  process.stdout.write(
    chalk.cyan(`\nDo you want to add Git to your project? [Y/n] `)
  );
  process.stdin.resume();
  process.stdin.on("data", (inputData) => {
    const answer = inputData.toString().trim().toLowerCase() || "y";
    if (answer == "y") {
      shell.echo(chalk.green(`\nYour project now have Git...`));
      shell.exec("git init");
    } else if (answer == "n") {
      console.log(
        chalk.green(`\n\nYou can run "git init" command later if you want Git.`)
      );
      process.exit(0);
    } else {
      console.log(
        chalk.red(
          `\nPlease answer with "Y" or "n", to add Git run "git init" command.`
        )
      );
      process.exit(0);
    }
  });
}

(async () => {
  try {
    verifyGit();
    removeGit();
    newRepo();
  } catch (err) {
    console.log(err);
  }
})();
