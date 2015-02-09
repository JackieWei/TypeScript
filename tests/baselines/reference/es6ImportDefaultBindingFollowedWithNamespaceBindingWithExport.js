//// [tests/cases/compiler/es6ImportDefaultBindingFollowedWithNamespaceBindingWithExport.ts] ////

//// [server.ts]

export var a = 10;

//// [client.ts]
export import defaultBinding, * as nameSpaceBinding  from "server";
export var x: number = nameSpaceBinding.a;

//// [server.js]
exports.a = 10;
//// [client.js]
var defaultBinding = require("server");
var nameSpaceBinding = defaultBinding;
exports.nameSpaceBinding = nameSpaceBinding;
exports.x = nameSpaceBinding.a;
