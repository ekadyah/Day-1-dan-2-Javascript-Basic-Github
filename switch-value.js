let a = 1;
let b = 2;
let c = a;
a = b
b = c

// Proses tukar nilai
console.log("nilai awal variable a " + a);
console.log("nilai awal variable b " + b);

a = b;
b = c;

console.log("nilai akhir variable a " + a);
console.log("nilai akhir variable b " + b);
