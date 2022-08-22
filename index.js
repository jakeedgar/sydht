"use strict";
exports.__esModule = true;
var types_1 = require("./types");
var pure_1 = require("./pure");
var arr = [2, 4, 6];
console.log((0, types_1.Nand)(2 + 2 === 5, 2 + 2 === 6));
console.log((0, pure_1.Head)(arr));
