const categoriesList = document.getElementById('categories');
const categories = categoriesList.getElementsByClassName('item');

console.log('Кількість категорій:', categories.length);

Array.from(categories).forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('li');

  console.log('Категорія:', categoryName);
  console.log('Кількість елементів:', categoryItems.length);
});

