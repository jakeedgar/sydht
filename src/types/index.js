"use strict";
exports.__esModule = true;
exports.Nand2 = exports.Nand = void 0;
var Nand = function (A, B) {
    if (A === false && B === false) {
        return true;
    }
    else {
        return false;
    }
};
exports.Nand = Nand;
var Nand2 = function (A, B) {
    A === false && B === false ? true : false;
};
exports.Nand2 = Nand2;
