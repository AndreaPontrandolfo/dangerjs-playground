import { message, danger, warn } from "danger";
import fs from "fs";

const modifiedMD = danger.git.modified_files.join("- ");

message("Second PR PR! Congrats!");
message("Changed Files in this PR: \n - " + modifiedMD);

const files = danger.git.modified_files.filter(
  (path) => path.endsWith("js") || path.endsWith("ts")
);

files.forEach((file) => {
  const fileContents = fs.readFileSync(file).toString();
  console.log(
    "🚀 ~ file: dangerfile.js ~ line 14 ~ files.forEach ~ content",
    fileContents
  );
  if (fileContents.includes("eslint-disable")) {
    warn("## 🤔 Found a eslint disable!");
  }
});

danger.github.pr.additions;

// const diffsPromises = files.map((file) => danger.git.JSONDiffForFile(file));

// Promise.all(diffsPromises).then((JSONDiffs) => {
//   warn("## 🤔" + JSON.stringify(JSONDiffs[0]));
// });
