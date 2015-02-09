//// [tests/cases/compiler/es6ImportNameSpaceImportWithExport.ts] ////

//// [server.ts]

export var a = 10;

//// [client.ts]
export import * as nameSpaceBinding from "server";
export var x = nameSpaceBinding.a;
export import * as nameSpaceBinding2 from "server"; // Not referenced imports


//// [server.js]
define(["require", "exports"], function (require, exports) {
    exports.a = 10;
});
//// [client.js]
define(["require", "exports", "server", "server"], function (require, exports, nameSpaceBinding, nameSpaceBinding2) {
    exports.nameSpaceBinding = nameSpaceBinding;
    exports.x = nameSpaceBinding.a;
    exports.nameSpaceBinding2 = nameSpaceBinding2;
});


//// [server.d.ts]
export declare var a: number;
//// [client.d.ts]
export import * as nameSpaceBinding from "server";
export declare var x: number;
export import * as nameSpaceBinding2 from "server";
