// console.log(String.fromCharCode(2))

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
geraMaiuscula = () => String.fromCharCode(rand(65, 91));
geraMinuscula = () => String.fromCharCode(rand(97, 123));
geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!?@#$%&*()-_=+';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraSimbolo())
    }

    return senhaArray.join('').slice(0, qtd)
}
