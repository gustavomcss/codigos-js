function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')
        img.style.width = '300px'
        img.style.height = '300px'
        img.style.borderRadius = '150px'

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/homem-crianca.jpg')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')
            } else if (idade < 30) {
                //Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p style="margin: 20px 0px;">Detectamos ${genero} com ${idade} anos.</p>`
        
        res.appendChild(img)
    }
}