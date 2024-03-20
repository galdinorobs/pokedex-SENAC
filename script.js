const pokemonsCard = document.querySelectorAll('.cartao-pokemon');
const listaSelecaoPokemons = document.querySelectorAll('.pokemon');



//selecionando a tag com a class .imagemLOGO 
let logo = document.querySelector('.imagemLOGO')
//selecionando a tag com a class .imagemA
let pikachu = document.querySelector('.imagemA')

//o método irá ser chamado ao carregr a página
function aocarregar() {
    /* altera o css fazendo com que a imagem do pikachu e do log alterem seu tamanho*/
    pikachu.style.transform = 'scale(1.1)'
    logo.style.transform = 'scale(1.1)'
}

//capturando a tag audio e colocando-a dentro de uma variável audioFundo
let audioFundo = document.querySelector('.audioFundo')
//capturando a imagem do play e adicionando-a dentro de uma variável audioPlay
let audioPlay  = document.querySelectorAll('.play')

//função que dará o play automaticamente
function play() {
    audioFundo.play()
}

//função que dará o pause de forma automática
function pause() {
    audioFundo.pause()
}

//guarda o elemento com a classe choque na variável choque, o elemento em questão é a tag video
let choque = document.querySelector('.choque')

//addEventListener irá aguardar pelo click na imagem do pikachu, quando for detectado o click, irá mudar o display:none para display:block e assim exibir o elemento na tela. Ao final, irá dar play no vídeo automaticamente
    pikachu.addEventListener('click', () => {
        choque.style.display = 'block'
        choque.play()
})