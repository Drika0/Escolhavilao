function escolherPersonagem(nome) {
  const missoes = [
    "resgatar uma alma perdida",
    "levar um inocente até o caminho do mal",
    "ajudar um inocente a se vingar usando o caos",
    "proteger o portal das sombras",
    "enfrentar um caçador",
    "vigiar a floresta amaldiçoada",
    "coletar 5 essências do medo",
    "invadir a mente de um inocente e semear o caos",
    "esconder o corpo antes do amanhecer",
    "recolher lágrimas de pessoas realmente boas",
    "caminhar entre os vivos sem ser percebido por 6 horas",
    "entregar uma carta maldita ao próximo alvo",
    "assombrar uma casa por 3 noites",
    "pintar um símbolo antigo com sangue fresco",
    "proteger o portal do mal dos caçadores",
    "colecionar 7 ossos de vítimas diferentes",
    "caçar o traidor que escapou do submundo",
    "proteger o livro negro até o ritual terminar",
    "invadir a paz de um inocente e deixá-lo em pânico",
    "destruir a relíquia que mantém o espírito preso"
  ];


  const missaoEscolhida = missoes[Math.floor(Math.random() * missoes.length)];
  const dias = Math.floor(Math.random() * 7) + 1;


  const som = document.getElementById("somClique");
  if (som) {
    som.currentTime = 0;
    som.play();
  }

  const telaPreta = document.getElementById("tela-preta");
  telaPreta.style.opacity = 1;
  telaPreta.style.pointerEvents = "auto";

  setTimeout(() => {
    window.location.href = `missao.html?personagem=${encodeURIComponent(nome)}&missao=${encodeURIComponent(missaoEscolhida)}&dias=${dias}`;
  }, 1500);
}

function irParaExplicacao() {
  window.location.href = "explicacao.html";
}
