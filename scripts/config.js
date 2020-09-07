var shell = require("shelljs");
var chalk = require("chalk");

// Verify is the project is under Git
// function verifyGit() {
//   if (!shell.which("git")) {
//     shell.echo(chalk.red("Sorry, this script requires git."));
//     shell.exit(1);
//   } else {
//     shell.echo(chalk.green("We are removing the Git directory repository."));
//   }
// }

// (async () => {
//   try {
//     verifyGit();
//     removeGit();
//     newRepo();
//   } catch (err) {
//     console.log(err);
//   }
// })();
