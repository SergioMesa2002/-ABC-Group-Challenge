function aplicarColoresAleatoriosAcardLetra() {
  const tarjetas = document.querySelectorAll('.cardLetra');
 
  tarjetas.forEach(card => {
    const generarColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };
 
    const color1 = generarColor();
    const color2 = generarColor();
    const color3 = generarColor();
 
    card.style.background = `linear-gradient(135deg, ${color1}, ${color2}, ${color3})`;
    card.style.color = 'white'; // Para que el texto tenga buen contraste
    card.style.padding = '10px';
    card.style.borderRadius = '15px';
  });
}
 
window.addEventListener('DOMContentLoaded', aplicarColoresAleatoriosAcardLetra);