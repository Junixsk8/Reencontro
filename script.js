window.addEventListener('load', () => {
  // Estrelas no fundo
  const canvas = document.getElementById('estrelas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let estrelas = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Criar várias estrelas com brilho
  for (let i = 0; i < 150; i++) {
    estrelas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      raio: Math.random() * 1.5 + 0.5,
      brilho: Math.random(),
      velocidade: Math.random() * 0.015 + 0.005
    });
  }

  function desenharEstrelas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let estrela of estrelas) {
      estrela.brilho += estrela.velocidade;
      if (estrela.brilho >= 1 || estrela.brilho <= 0) {
        estrela.velocidade *= -1;
      }

      ctx.beginPath();
      ctx.arc(estrela.x, estrela.y, estrela.raio, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 200, ${estrela.brilho})`;
      ctx.fill();
    }
    requestAnimationFrame(desenharEstrelas);
  }

  desenharEstrelas();
});
