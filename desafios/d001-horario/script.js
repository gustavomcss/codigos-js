function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('fundo')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manhã.jpg'
        fundo.style.background = '#88A76E'
    } else {
        if (hora >= 12 && hora <= 18) {
            //BOA TARDE!
            img.src = 'imagens/tarde.jpg'
            fundo.style.background = '#FDBF8E'
        } else {
            //BOA NOITE!
            img.src = 'imagens/noite.jpg'
            fundo.style.background = '#284B51'
        }
    }
}
