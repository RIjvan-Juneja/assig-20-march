// Write a function that takes an array of products and returns a function that filters the array by a given product
// category. The function must filter an eCommerce products array by a specific category. The closure filters
// products using the filter() method. Finally, it returns a new array containing only the products with the same
// category as the input.


function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    }
  }
  
  // Example usage
  const products = [
    { name: 'iPhone 13', category: 'phones', price: 999 },
    { name: 'MacBook Pro', category: 'laptops', price: 1499 },
    { name: 'AirPods', category: 'headphones', price: 149 },
    { name: 'Apple Watch', category: 'smartwatches', price: 399 },
    { name: 'iPad Pro', category: 'tablets', price: 799 }
  ];
  
  const filterByPhones = filterByCategory(products);
  console.log(filterByPhones('phones')); // Output: [{ name: 'iPhone 13', category: 'phones', price: 999 }]
  