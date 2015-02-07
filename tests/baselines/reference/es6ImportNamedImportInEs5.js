//// [tests/cases/compiler/es6ImportNamedImportInEs5.ts] ////

//// [es6ImportNamedImportInEs5_0.ts]

export var a = 10;
export var x = a;
export var m = a;
export var a1 = 10;
export var x1 = 10;
export var z1 = 10;
export var z2 = 10;
export var aaaa = 10;

//// [es6ImportNamedImportInEs5_1.ts]
import { } from "es6ImportNamedImportInEs5_0";
import { a } from "es6ImportNamedImportInEs5_0";
var xxxx = a;
import { a as b } from "es6ImportNamedImportInEs5_0";
var xxxx = b;
import { x, a as y } from "es6ImportNamedImportInEs5_0";
var xxxx = x;
var xxxx = y;
import { x as z,  } from "es6ImportNamedImportInEs5_0";
var xxxx = z;
import { m,  } from "es6ImportNamedImportInEs5_0";
var xxxx = m;
import { a1, x1 } from "es6ImportNamedImportInEs5_0";
var xxxx = a1;
var xxxx = x1;
import { a1 as a11, x1 as x11 } from "es6ImportNamedImportInEs5_0";
var xxxx = a11;
var xxxx = x11;
import { z1 } from "es6ImportNamedImportInEs5_0";
var z111 = z1;
import { z2 as z3 } from "es6ImportNamedImportInEs5_0";
var z2 = z3; // z2 shouldn't give redeclare error

// These are elided
import { aaaa } from "es6ImportNamedImportInEs5_0";
// These are elided
import { aaaa as bbbb } from "es6ImportNamedImportInEs5_0";


//// [es6ImportNamedImportInEs5_0.js]
exports.a = 10;
exports.x = exports.a;
exports.m = exports.a;
exports.a1 = 10;
exports.x1 = 10;
exports.z1 = 10;
exports.z2 = 10;
exports.aaaa = 10;
//// [es6ImportNamedImportInEs5_1.js]
var _a = require("es6ImportNamedImportInEs5_0");
var _b = require("es6ImportNamedImportInEs5_0");
var xxxx = _b.a;
var _c = require("es6ImportNamedImportInEs5_0");
var xxxx = _c.a;
var _d = require("es6ImportNamedImportInEs5_0");
var xxxx = _d.x;
var xxxx = _d.a;
var _e = require("es6ImportNamedImportInEs5_0");
var xxxx = _e.x;
var _f = require("es6ImportNamedImportInEs5_0");
var xxxx = _f.m;
var _g = require("es6ImportNamedImportInEs5_0");
var xxxx = _g.a1;
var xxxx = _g.x1;
var _h = require("es6ImportNamedImportInEs5_0");
var xxxx = _h.a1;
var xxxx = _h.x1;
var _j = require("es6ImportNamedImportInEs5_0");
var z111 = _j.z1;
var _k = require("es6ImportNamedImportInEs5_0");
var z2 = _k.z2; // z2 shouldn't give redeclare error
