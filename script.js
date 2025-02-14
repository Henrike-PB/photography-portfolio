// Lightbox para a galeria
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('src');
    const alt = item.getAttribute('alt');
    openLightbox(src, alt);
  });
});

function openLightbox(src, alt) {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="${alt}">
      <p>${alt}</p>
    </div>
  `;
  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', () => {
    lightbox.remove();
  });
}