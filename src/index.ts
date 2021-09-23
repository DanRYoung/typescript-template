import hash from "./hash";

console.log("App Version", process.env["npm_package_version"]);
console.log("App Commit Hash", hash);
