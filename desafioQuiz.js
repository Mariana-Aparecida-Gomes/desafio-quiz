const prompt = require('prompt-sync')();

function nomeJogador(){
    return prompt('Qual o seu nome? ');
}

function quizJogar(){
    let op = 4;
    let pontuacao = 0;
    let resposta;

    while (op != 0) {
        op = parseInt(prompt("Escolha o tema que deseja jogar: 1 - Português 2 - Matemática 3 - Atualidades 0 - Sair"));

        switch (op) {
            case 1:
                pontuacao += jogarPortugues();
                break;
            
            case 2:
                pontuacao += jogarMatematica();
                break;

            case 3:
                pontuacao += jogarAtualidades();
                break;
            
            case 0:
                console.log("Você optou por sair!!");
                break;

            default:
                console.log("Digite uma opção válida.");
                break;

        }
    }

    return pontuacao;
}

function jogarMatematica(){
    let pontuacao = 0;
    let resposta;

    resposta = prompt("O valor de 5+3 é 9? Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto. O resultado da soma é 8.")
    }

    resposta = prompt("A raiz quadrada de 64 é 8. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto.")
    }

    resposta = prompt("O resultado de 12/4 é 3. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto.")
    }
}

function jogarPortugues(){
    let pontuacao = 0;
    let resposta;

    resposta = prompt("O plural de cão é cães. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto.")
    }

    resposta = prompt("A palavra Rápido é um advérbio. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto. O advérbio certo é rapidamente.")
    }

    resposta = prompt("O antônimo de feliz é satisfeito. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto. O antônimo de feliz é triste.")
    }
}

function jogarAtualidades(){
    let pontuacao = 0;
    let resposta;

    resposta = prompt("O filme que ganhou o oscar em 2024 é Oppenheimer. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto.")
    }

    resposta = prompt("Adele venceu o Grammy de Álbum do Ano em 2024. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "falso") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto. O cantor certo é Taylor Swift.")
    }

    resposta = prompt("A série da Netflix mais assistida em 2023 é Stranger Things. Verdadeiro ou falso? ");
    if (resposta.toLowerCase() === "verdadeiro") {
        console.log("Muito bem!! Acertou!");
        pontuacao++
    }else {
        console.log("Incorreto.")
    }

    return pontuacao;
}

function pontuacaoFinal(jogador,pontuacao) {
    console.log(`Muito obrigado por jogar o nosso quiz, ${jogador}! Sua pontuação foi: ${pontuacao}`);
}

const jogador = nomeJogador();
const pontuacao = quizJogar();
pontuacaoFinal(jogador,pontuacao);