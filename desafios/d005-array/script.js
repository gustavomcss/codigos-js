var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Elemento ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor Inválido ou Já Pertencente!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('[ERRO] Vetor Vazio! Adicione Valores.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            }

            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<br><p>Quantidade de Elementos: ${tot}</p>`
        res.innerHTML += `<p>Menor Valor de Entrada: ${menor}</p>`
        res.innerHTML += `<p>Maior Valor de Entrada: ${maior}</p>`
        res.innerHTML += `<p>Soma Total dos Elementos: ${soma}</p>`
        res.innerHTML += `<p>Média dos Elementos: ${media.toFixed(2)}</p>`
    }
}