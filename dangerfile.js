import { message, danger, warn } from "danger";

const modifiedMD = danger.git.modified_files.join("- ");

message("Second PR PR! Congrats!");
message("Changed Files in this PR: \n - " + modifiedMD);
danger.git.linesOfCode().then((changedLines) => {
  warn("## 🤔" + changedLines);
});
