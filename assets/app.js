let campoVazio =  document.querySelector('.retorno__retorno-vazio')

let textoDigitado = document.querySelector(".conteudo__texto").value

function transformarTexto (funcao, texto) {
    if (funcao === 'criptografar') {
        let textoTransformado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat")
    }else {
        let textoTransformado = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u')
    }

    return textoTransformado;
} 

function exibeTexto(classe, texto) {
    let campo = document.querySelector(classe);
    campo.textContent = texto;
}

function ocultarElemento(elemento) {
    elemento.style.display = 'none';
}

function exibirElemento(elemento) {
    elemento.style.display = 'flex'
}

function criptografar () {
}

