//// [tests/cases/compiler/es6ImportDefaultBindingWithExport.ts] ////

//// [server.ts]

var a = 10;
export = a;

//// [client.ts]
export import defaultBinding from "server";
export var x = defaultBinding;
export import defaultBinding2 from "server"; // non referenced

//// [server.js]
define(["require", "exports"], function (require, exports) {
    var a = 10;
    return a;
});
//// [client.js]
define(["require", "exports", "server", "server"], function (require, exports, defaultBinding, defaultBinding2) {
    exports.defaultBinding = defaultBinding;
    exports.x = defaultBinding;
    exports.defaultBinding2 = defaultBinding2;
});


//// [server.d.ts]
declare var a: number;
export = a;
//// [client.d.ts]
export import defaultBinding from "server";
export declare var x: number;
export import defaultBinding2 from "server";
