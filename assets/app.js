let textoDigitado = document.querySelector(".conteudo__texto")

let campoVazio =  document.querySelector('.retorno__retorno-vazio')

let campoCheio = document.querySelector('.retorno__retorno-cheio')

let textoTransformado = ''

function transformarTexto (funcao, texto) {
    if (funcao === 'criptografar') {
        textoTransformado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat")
    }else {
         textoTransformado = texto.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u')
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
    elemento.style.display = 'flex';
}

function limpaConteudo(classe) {
    let campo = document.querySelector(classe);
    campo.value = '';
}

function criptografar () {
    if (textoDigitado.value === "") {
        alert('conteúdo não encontrado! \ndigite um conteúdo para seguir')
    }else {
        ocultarElemento(campoVazio);
        exibirElemento(campoCheio);
        exibeTexto('.retorno__retorno-cheio__texto', transformarTexto('criptografar', textoDigitado.value));
        limpaConteudo('.conteudo__texto');
    }
}       

function descriptografar () {
    if (textoDigitado.value === "") {
        alert('conteúdo não encontrado! \ndigite um conteúdo para seguir');
    }else {
        ocultarElemento(campoVazio);
        exibirElemento(campoCheio)
        exibeTexto('.retorno__retorno-cheio__texto', transformarTexto('descriptografar', textoDigitado.value));
        limpaConteudo('.conteudo__texto');
    }
}

function copiarTexto() {
    let texto = document.getElementById('texto-retorno').value;
    navigator.clipboard.writeText(texto);
    alert("texto copiado com sucesso!");

    ocultarElemento(campoCheio)
    exibirElemento(campoVazio)
}