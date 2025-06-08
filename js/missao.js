function getParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        personagem: urlParams.get('personagem'),
        missao: urlParams.get('missao'),
        dias: parseInt(urlParams.get('dias'), 10)
    };
}

function mostrarMissao() {
    const { personagem, missao, dias } = getParams();

    if (!personagem || !missao || isNaN(dias)) {
        alert("Dados da missão incompletos!");
        return;
    }

    alert(`Você escolheu: ${personagem}`);

    document.getElementById("personagem").innerText = personagem;
    document.getElementById("missao").innerText = missao;
    document.getElementById("dias").innerText = dias;

    iniciarContador(dias);
}

function iniciarContador(dias) {
    let segundos = dias * 86400;

    function formatar(segundos) {
        const d = Math.floor(segundos / 86400);
        const h = Math.floor((segundos % 86400) / 3600);
        const m = Math.floor((segundos % 3600) / 60);
        const s = segundos % 60;
        return `${d}d ${h}h ${m}m ${s}s`;
    }

    setInterval(() => {
        if (segundos > 0) {
            document.getElementById("contador").innerText = formatar(segundos);
            segundos--;
        } else {
            document.getElementById("contador").innerText = "Missão concluída!";
        }
    }, 1000);
    

}

window.onload = mostrarMissao;
