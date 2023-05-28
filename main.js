const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

productForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const priceInput = document.getElementById('price');

  const productData = {
    name: nameInput.value,
    price: parseFloat(priceInput.value),
  };

  const response = await fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });

  if (response.ok) {
    const product = await response.json();
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - $${product.price}`;
    productList.appendChild(listItem);
    nameInput.value = '';
    priceInput.value = '';
  }
});
