var shell = require("shelljs");

// Verify is the project is under Git
if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
} else {
  shell.echo("You are in the config file");
}

// Ask to remove Git Directory
// If yes remove and move to next step
// if no remove it and end here

// Ask if the user want a new git repo
// If yes init with git
// if not end script

// Message to start working
