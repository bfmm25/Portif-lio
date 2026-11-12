const botaoTema = document.getElementById('btnLight'); 
botaoTema.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
});

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {
    let tel_formatado = telefone.value;

    
    tel_formatado = tel_formatado.replace(/\D/g, "");

   
    if (tel_formatado.length > 0 && tel_formatado[0] !== "(") {
        tel_formatado = "(" + tel_formatado;
    }

   
    if (tel_formatado.length > 3 && tel_formatado[3] !== ")") {
        tel_formatado = tel_formatado.slice(0, 3) + ") " + tel_formatado.slice(3);
    }

   
    if (tel_formatado.length > 10 && tel_formatado[10] !== "-") {
        tel_formatado = tel_formatado.slice(0, 10) + "-" + tel_formatado.slice(10);
    }
    
    telefone.value = tel_formatado;
});
