var shell = require("shelljs");
const nodeVersion = "12.18.2";
const npmVersion = "6.14.5";

// Verify is the project is under Git
if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
} else {
  shell.echo("Your project is under Git source control ✅");
}

// Install dependencies
if (shell.exec("npm install").code !== 0) {
  shell.echo(
    `Error: You should have Node version: ${nodeVersion} or greater and NPM version: ${npmVersion} or greater.`
  );
  shell.exit(1);
} else {
  shell.echo("Dependencies installed succesfully ✅");
}

process.stdout.write(
  `\nDo you want to run the configuration script? 🛠 \nIf you are going to develop a React application type "Y". \nIf you want to contribute and help us then type "n" (You can run "npm config" later manually.). [Y/n] `
);
process.stdin.resume();
process.stdin.on("data", (pData) => {
  const answer = pData.toString().trim().toLowerCase() || "y";
  if (answer == "y" || "yes") {
    shell.echo(`\nYour project is being configured... ✅`);
    shell.exec("npm run config");
  } else if (answer == "n" || "no") {
    shell.echo(
      `\nThanks for helping us with your contribution, you can start adding features, code or fixing issues.`
    );
    shell.exit(1);
  } else {
    shell.echo(
      `\nPlease answer with "Y" or "n", run "npm start" command to start your project configuration again.`
    );
    shell.exit(1);
  }
});
