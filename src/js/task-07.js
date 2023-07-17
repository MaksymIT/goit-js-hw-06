const elemFontSize = document.getElementById('font-size-control');
const elemText = document.getElementById('text');

elemFontSize.addEventListener('input', () => {
  const fontSize = elemFontSize.value + 'px';
  elemText.style.fontSize = fontSize;
});



