//// [tests/cases/compiler/es6ImportNamedImportWithExport.ts] ////

//// [server.ts]

export var a = 10;
export var x = a;
export var m = a;
export var a1 = 10;
export var x1 = 10;
export var z1 = 10;
export var z2 = 10;
export var aaaa = 10;

//// [client.ts]
export import { } from "server";
export import { a } from "server";
export var xxxx = a;
export import { a as b } from "server";
export var xxxx = b;
export import { x, a as y } from "server";
export var xxxx = x;
export var xxxx = y;
export import { x as z,  } from "server";
export var xxxx = z;
export import { m,  } from "server";
export var xxxx = m;
export import { a1, x1 } from "server";
export var xxxx = a1;
export var xxxx = x1;
export import { a1 as a11, x1 as x11 } from "server";
export var xxxx = a11;
export var xxxx = x11;
export import { z1 } from "server";
export var z111 = z1;
export import { z2 as z3 } from "server";
export var z2 = z3; // z2 shouldn't give redeclare error

// Non referenced imports
export import { aaaa } from "server";
export import { aaaa as bbbb } from "server";


//// [server.js]
exports.a = 10;
exports.x = exports.a;
exports.m = exports.a;
exports.a1 = 10;
exports.x1 = 10;
exports.z1 = 10;
exports.z2 = 10;
exports.aaaa = 10;
//// [client.js]
var _a = require("server");
var _b = require("server");
exports.a = _b.a;
exports.xxxx = _b.a;
var _c = require("server");
exports.b = _c.a;
exports.xxxx = _c.a;
var _d = require("server");
exports.x = _d.x;
exports.y = _d.a;
exports.xxxx = _d.x;
exports.xxxx = _d.a;
var _e = require("server");
exports.z = _e.x;
exports.xxxx = _e.x;
var _f = require("server");
exports.m = _f.m;
exports.xxxx = _f.m;
var _g = require("server");
exports.a1 = _g.a1;
exports.x1 = _g.x1;
exports.xxxx = _g.a1;
exports.xxxx = _g.x1;
var _h = require("server");
exports.a11 = _h.a1;
exports.x11 = _h.x1;
exports.xxxx = _h.a1;
exports.xxxx = _h.x1;
var _j = require("server");
exports.z1 = _j.z1;
exports.z111 = _j.z1;
var _k = require("server");
exports.z3 = _k.z2;
exports.z2 = _k.z2; // z2 shouldn't give redeclare error
// Non referenced imports
var _l = require("server");
exports.aaaa = _l.aaaa;
var _m = require("server");
exports.bbbb = _m.aaaa;


//// [server.d.ts]
export declare var a: number;
export declare var x: number;
export declare var m: number;
export declare var a1: number;
export declare var x1: number;
export declare var z1: number;
export declare var z2: number;
export declare var aaaa: number;
//// [client.d.ts]
export import { } from "server";
export import { a } from "server";
export declare var xxxx: number;
export import { a as b } from "server";
export declare var xxxx: number;
export import { x, a as y } from "server";
export declare var xxxx: number;
export declare var xxxx: number;
export import { x as z } from "server";
export declare var xxxx: number;
export import { m } from "server";
export declare var xxxx: number;
export import { a1, x1 } from "server";
export declare var xxxx: number;
export declare var xxxx: number;
export import { a1 as a11, x1 as x11 } from "server";
export declare var xxxx: number;
export declare var xxxx: number;
export import { z1 } from "server";
export declare var z111: number;
export import { z2 as z3 } from "server";
export declare var z2: number;
export import { aaaa } from "server";
export import { aaaa as bbbb } from "server";
