//// [tests/cases/compiler/es6ImportWithoutFromClauseWithExport.ts] ////

//// [server.ts]

export var a = 10;

//// [client.ts]
export import "server";

//// [server.js]
exports.a = 10;
//// [client.js]
var _a = require("server");
