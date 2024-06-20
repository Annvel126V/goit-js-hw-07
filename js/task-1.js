const categories = document.querySelectorAll('ul#categories li.item');


console.log(`Number of categories: ${categories.length}`);


categories.forEach(category => {
   
    const categoryTitle = category.querySelector('h2').textContent;
    console.log(`Category: ${categoryTitle}`);

   
    const categoryItems = category.querySelectorAll('ul li');
    console.log(`Elements: ${categoryItems.length}`);
});