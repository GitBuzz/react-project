var shell = require("shelljs");
var chalk = require("chalk");

module.exports = {
  // Remove Git
  removeGit: function () {
    if (shell.rm("-rf", ".git/").code !== 0) {
      shell.echo(
        shell.red(
          `We can't remove Git because you don't have a Git repository.`
        )
      );
      shell.exit(1);
    } else {
      console.log(chalk.green("\n\nGit removed."));
    }
  },

  // Ask if the user want a new git repo
  newRepo: function () {
    process.stdout.write(
      chalk.cyan(`\n\nDo you want to add Git to your project? [Y/n] `)
    );
    process.stdin.resume();
    process.stdin.on("data", (inputData) => {
      const answer = inputData.toString().trim().toLowerCase() || "y";
      if (answer == "y") {
        shell.echo(chalk.green(`\n\nYour project now have Git...`));
        shell.exec("git init");
        process.exit(0);
      } else if (answer == "n") {
        console.log(
          chalk.green(
            `\n\nYou can run "git init" command later if you want Git.`
          )
        );
        process.exit(0);
      } else {
        console.log(
          chalk.red(
            `\n\nPlease answer with "Y" or "n", to add Git run "git init" command.`
          )
        );
        process.exit(0);
      }
    });
  },
};
