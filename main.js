const botões = document.querySelectorAll(".botão")
for(let i = 0;i<botoes.lenght;j++){
    botoes[i].onlick = function(){
        botoes[i].classlist.add("ativo")
    }
}
