const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 900, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Shirt', category: 'clothing', price: 25, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Book', category: 'books', price: 15, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Smartphone', category: 'electronics', price: 600, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Jacket', category: 'clothing', price: 50, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Tablet', category: 'electronics', price: 300, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Jeans', category: 'clothing', price: 40, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Headphones', category: 'electronics', price: 150, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Novel', category: 'books', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Camera', category: 'electronics', price: 500, image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Dress', category: 'clothing', price: 70, image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Speaker', category: 'electronics', price: 120, image: 'https://via.placeholder.com/150' },
    // Add more products as needed
];

let displayedProducts = 6;
let sortedProducts = [...products];

//on load page function render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(sortedProducts.slice(0, displayedProducts));

    document.getElementById('sort').addEventListener('change', handleSort);
    document.getElementById('category').addEventListener('change', handleFilter);
    document.getElementById('load-more').addEventListener('click', handleLoadMore);
});

// for catergorisation 
function renderProducts(productsToRender) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    productsToRender.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;
        productList.appendChild(productItem);
    });
}

// for sort alphabetical and price
function handleSort() {
    const sortValue = document.getElementById('sort').value;
    sortedProducts = [...products];

    switch (sortValue) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }

    renderProducts(sortedProducts.slice(0, displayedProducts));
}

// for handle load more
function handleFilter() {
    const categoryValue = document.getElementById('category').value;
    if (categoryValue === 'all') {
        sortedProducts = [...products];
    } else {
        sortedProducts = products.filter(product => product.category === categoryValue);
    }

    displayedProducts = 10;
    renderProducts(sortedProducts.slice(0, displayedProducts));
}

function handleLoadMore() {
    displayedProducts += 10;
    renderProducts(sortedProducts.slice(0, displayedProducts));
}
