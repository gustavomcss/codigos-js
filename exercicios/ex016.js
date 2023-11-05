function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

function soma(n1 = 0, n2 = 0) {
    return (n1 + n2)
}

function fatorial(b) {
    let fat = 1

    for (let c = b; c > 1; c--) {
        fat *= c
    }
    
    return fat
}

function fatorial1(b) {
    if (b == 1) {
        return 1
    } else {
        return (b * fatorial1(b-1))
    }
}

console.log(parimpar(11))
console.log(soma(8, 2))
console.log(fatorial(5))
console.log(fatorial1(5))

let v = function (x) {
    return x*2
}

console.log(v(4))