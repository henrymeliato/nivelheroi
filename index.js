function classificacaoHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe a mensagem com o nível do herói
    console.log(`O Herói ${nome} está no nível ${nivel}`);
}

// Solicita ao usuário para digitar o nome do herói e a quantidade de experiência (XP) do herói
let nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Chama a função para classificar o nível do herói
classificacaoHeroi(nomeHeroi, xpHeroi);