"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSort = exports.Head = void 0;
var Head = function (list) { return list[0]; };
exports.Head = Head;
var a = ['all sellers', 'jump ship', 'aaa', 'booty patrol'];
var s = 'all sellers';
var customSort = function (arr, str) {
    var sorted = __spreadArray([], arr.sort(), true);
    var output = [];
    output.push(str);
    sorted.forEach(function (element) {
        {
            element != output[0] ? output.push(element) : str;
        }
    });
    return output;
};
exports.customSort = customSort;
console.log((0, exports.customSort)(a, s));
//# sourceMappingURL=index.js.map