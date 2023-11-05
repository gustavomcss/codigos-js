let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    
    engordar(p) {
        console.log('Engordou!')
        this.peso += p
    }
}

console.log(`Nome: ${amigo.nome}`)
console.log(`Sexo: ${amigo.sexo}`)
console.log(`Peso: ${amigo.peso}`)

amigo.engordar(8)

console.log(`Nome: ${amigo.nome}`)
console.log(`Sexo: ${amigo.sexo}`)
console.log(`Peso: ${amigo.peso}`)