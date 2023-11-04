let num = [0, 1, 2, 3, 4]
var c

for (c = 0; c < num.length; c++) {
    console.log(num[c])
}
console.log()

num[5] = 5 
for (c in num) {
    console.log(num[c])
}
console.log()


num.push(6)
for (c = 0; c < num.length; c++) {
    console.log(num[c])
}
console.log()

// num.length()
// num.sort()
// num.indexOf(e)      -> (-1) Ñ Encontrado