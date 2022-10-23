import { message, danger } from "danger";

const modifiedMD = danger.git.modified_files.join("- ");
message("Second PR PR! Congrats!");
message("Changed Files in this PR: \n - " + modifiedMD);
