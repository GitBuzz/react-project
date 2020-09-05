var shell = require("shelljs");

// Verify is the project is under Git
if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git.");
  shell.exit(1);
} else {
  shell.echo("We are removing the Git directory repository. ✅");
}

// Remove Git
if (shell.rm("-rf", ".git/").code !== 0) {
  shell.echo(`You don't have a Git repository. ✅`);
  shell.exit(1);
} else {
  console.log("Git removed. ✅");
}

// Ask if the user want a new git repo
//process.stdout.write(`\nDo you want a new Git repository? [Y/n] `);
//process.stdin.resume();
//process.stdin.on("data", (pData) => {
//const answer = pData.toString().trim().toLowerCase() || "y";
//if (answer == "y") {
//shell.echo(`\nWe are adding Git to your project.... ✅`);
//shell.exec("git init");
//} else if (answer == "n") {
//shell.echo(
//`\nYou can later run "git init" to use Git source control on your project.`
//);
//shell.exit(1);
// } else {
// shell.echo(
// `\nSomething went wrong, run "git init" command if you want to use Git source control on your project.`
// );
//shell.exit(1);
//}
//});

// Message to start working
