setInterval(() => {
    document.querySelectorAll('.thunder').forEach(thunder => {
      thunder.style.animation = 'none';
      void thunder.offsetWidth;
      thunder.style.animation = '';
    });
  }, 5000);
  
  const cursor = document.querySelector('.custom-cursor');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });
  
  document.addEventListener('mousedown', () => {
    cursor.classList.add('expand');
  });
  
  document.addEventListener('mouseup', () => {
    cursor.classList.remove('expand');
  });
  
  const rainContainer = document.getElementById('rain');
  
  function createRainDrops() {
    for (let i = 0; i < 500; i++) {
      const rainDrop = document.createElement('div');
      rainDrop.classList.add('rain-drop');
      rainDrop.style.left = `${Math.random() * 100}vw`;
      rainDrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
      rainDrop.style.animationDelay = `${Math.random() * 2}s`;
      rainDrop.style.opacity = `${Math.random() * 0.5 + 0.3}`;
      rainDrop.style.width = `${Math.random() * 2 + 1}px`;
      rainDrop.style.height = `${Math.random() * 15 + 10}px`;
      rainContainer.appendChild(rainDrop);
    }
  }
  
  createRainDrops();