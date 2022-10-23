import { message, danger, warn } from "danger";

const modifiedMD = danger.git.modified_files.join("- ");

message("Second PR PR! Congrats!");
message("Changed Files in this PR: \n - " + modifiedMD);

const files = danger.git.modified_files.filter(
  (path) => path.endsWith("js") || path.endsWith("ts")
);

const diffsPromises = files.map((file) => danger.git.JSONDiffForFile(file));

Promise.all(diffsPromises).then((JSONDiffs) => {
  warn("## 🤔" + JSONDiffs[0]);
});
