let message: string = 'Hello, World!';
console.log(message);

import { readFileSync } from 'fs';
const file = readFileSync('./input_1.txt', 'utf-8');

let elves : string[] = file.split("\n\n")

let biggest_scack : number = 0

for (var elf of elves){
    let total : number = 0
    let snacks : string[] = elf.split("\n")
    for (var snack of snacks){
        total += Number(snack)
    }
    if (total > biggest_scack) {
        biggest_scack = total
    }
}   

console.log(biggest_scack);
