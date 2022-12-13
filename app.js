"use strict";
exports.__esModule = true;
var message = 'Hello, World!';
console.log(message);
var fs_1 = require("fs");
var file = (0, fs_1.readFileSync)('./input_1.txt', 'utf-8');
var elves = file.split("\n\n");
var biggest_scack = 0;
for (var _i = 0, elves_1 = elves; _i < elves_1.length; _i++) {
    var elf = elves_1[_i];
    var total = 0;
    var snacks = elf.split("\n");
    for (var _a = 0, snacks_1 = snacks; _a < snacks_1.length; _a++) {
        var snack = snacks_1[_a];
        total += Number(snack);
    }
    if (total > biggest_scack) {
        biggest_scack = total;
    }
}
console.log(biggest_scack);
