window.addEventListener('load', () => {
  const loader = document.getElementById('loader-wrapper');
  const content = document.getElementById('app');
  const gifDuration = 3000;
  
  setTimeout(() => {
    loader.style.opacity = '0';
    content.style.opacity = 'visible';
    
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, gifDuration);
});