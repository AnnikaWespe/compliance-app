#!/usr/bin/env node
var process = require('process');
var azure = require('azure-storage');

// Get the arguments to run the command
var flags = JSON.parse(process.env.npm_config_argv).original

var blobNameFlag = "newfile";
if (flags.indexOf("--blobName") > 0) {
  blobNameFlag = flags[flags.indexOf("--blobName") + 1];
}
console.log("Blob name: \"" + blobNameFlag + "\".");


var containerFlag = "default";
if (flags.indexOf("--container") > 0) {
  containerFlag = flags[flags.indexOf("--container") + 1];
}
console.log("Container: \"" + containerFlag + "\".");

var localFileNameFlag = "";
if (flags.indexOf("--localFileName") > 0) {
  localFileNameFlag = flags[flags.indexOf("--localFileName") + 1];
}
console.log("Local File name: \"" + localFileNameFlag + "\".");

var accountName = "";
if (flags.indexOf("--accountName") > 0) {
  accountName = flags[flags.indexOf("--accountName") + 1];
}
console.log("Account name: \"" + accountName + "\".");

var accountKey = "";
if (flags.indexOf("--accountKey") > 0) {
  accountKey = flags[flags.indexOf("--accountKey") + 1];
}

//Upload the binary
var blobService = azure.createBlobService(accountName, accountKey);
blobService.createBlockBlobFromLocalFile(containerFlag, blobNameFlag, localFileNameFlag, function (error, result, response) {
  if (!error) {
    console.log("Uploaded successfully!");
  } else {
    throw Error("Something went wrong: " + error);
  }
});