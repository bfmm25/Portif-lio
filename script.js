const botaoTema = document.getElementById('btnLight'); // Coloque o ID correto do seu botão

botaoTema.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
});

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {
    let tel_formatado = telefone.value;

    // Limpa tudo o que não for número
    tel_formatado = tel_formatado.replace(/\D/g, "");

    // Coloca o parêntese no começo se tiver pelo menos 1 número
    if (tel_formatado.length > 0 && tel_formatado[0] !== "(") {
        tel_formatado = "(" + tel_formatado;
    }

    // Coloca o fecha parêntese, O ESPAÇO e corta após o DDD
    if (tel_formatado.length > 3 && tel_formatado[3] !== ")") {
        tel_formatado = tel_formatado.slice(0, 3) + ") " + tel_formatado.slice(3);
    }

    // Coloca o traço na posição correta (ajustado para o espaço extra)
    if (tel_formatado.length > 10 && tel_formatado[10] !== "-") {
        tel_formatado = tel_formatado.slice(0, 10) + "-" + tel_formatado.slice(10);
    }

    // Devolve o valor formatado para o input
    telefone.value = tel_formatado;
});