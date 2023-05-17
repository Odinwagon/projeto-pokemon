
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")
const imagenBotaoTrocaDeLua = document.querySelector(".imagen-botao")

botaoAlterarTema.addEventListener("click", () => {
    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (ModoEscuroEstaAtivo) {
        imagenBotaoTrocaDeLua.setAttribute("src", "./src/imagens/sun.png")

    } else {
        imagenBotaoTrocaDeLua.setAttribute("src", "./src/imagens/moon.png")
    }

})