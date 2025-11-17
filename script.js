// script.js
document.addEventListener('DOMContentLoaded', ()=> {
  // Yıl güncelle
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // Menü toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if(menuToggle && nav){
    menuToggle.addEventListener('click', ()=> {
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';
      if(!open) nav.style.flexDirection = 'column';
    });
  }

  console.log('Solvia Tattoo sayfası yüklendi.');
});
// placeholder
