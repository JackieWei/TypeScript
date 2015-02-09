//// [tests/cases/compiler/es6ImportWithoutFromClause.ts] ////

//// [es6ImportWithoutFromClause_0.ts]

export var a = 10;

//// [es6ImportWithoutFromClause_2.ts]
export var b = 10;

//// [es6ImportWithoutFromClause_1.ts]
import "es6ImportWithoutFromClause_0"; 
import "es6ImportWithoutFromClause_2";

//// [es6ImportWithoutFromClause_0.js]
exports.a = 10;
//// [es6ImportWithoutFromClause_2.js]
exports.b = 10;
//// [es6ImportWithoutFromClause_1.js]
var _a = require("es6ImportWithoutFromClause_0");
var _b = require("es6ImportWithoutFromClause_2");


//// [es6ImportWithoutFromClause_0.d.ts]
export declare var a: number;
//// [es6ImportWithoutFromClause_2.d.ts]
export declare var b: number;
//// [es6ImportWithoutFromClause_1.d.ts]
