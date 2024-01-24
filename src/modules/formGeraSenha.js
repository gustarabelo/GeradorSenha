import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCarac = document.querySelector('.qtd-carac');
const chkMaiu = document.querySelector('.chk-maiu');
const chkMinu = document.querySelector('.chk-minu');
const chkNume = document.querySelector('.chk-nume');
const chkSimb = document.querySelector('.chk-simb');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {

    if(qtdCarac.value < 0 || qtdCarac.value > 25) return 'Quantidade inválida.'

    const senha = geraSenha(
        qtdCarac.value,
        chkMaiu.checked,
        chkMinu.checked,
        chkNume.checked,
        chkSimb.checked
    );

    return senha || 'Nada Selecionado.';
}
