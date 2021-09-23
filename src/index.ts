import hash from "./hash";

console.log("App version", process.env["npm_package_version"]);
console.log("App commit hash", hash);
