// Animación principal del banner (simple)
document.addEventListener('DOMContentLoaded', () => {
  const animacion = document.querySelector('.animacion-principal');
  if(animacion) {
    animacion.innerHTML = "<svg width='180' height='80'><circle cx='90' cy='40' r='35' fill='#ff9800' /><text x='20' y='50' font-family='Montserrat' font-size='32' fill='#222'>MateManias</text></svg>";
  }
});
// Puedes agregar más funcionalidades interactivas y quizzes según avanzas
