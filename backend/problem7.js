class Product {
    constructor(id, name, description, price, category, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
    }
}
let products = [];
function createInitialProducts() {
    products.push(new Product(1, "Product 1", "Description for product 1", 10.99, "Category A", "image1.jpg"));
    products.push(new Product(2, "Product 2", "Description for product 2", 15.99, "Category B", "image2.jpg"));
    products.push(new Product(3, "Product 3", "Description for product 3", 20.99, "Category C", "image3.jpg"));
}
function getAllProducts() {
    return products;
}
function getProductById(id) {
    return products.find(product => product.id === id);
}
function updateProductDescription(id, newDescription) {
    const product = getProductById(id);
    if (product) {
        product.description = newDescription;
    }
}
function changeProductImage(id, newImage) {
    const product = getProductById(id);
    if (product) {
        product.image = newImage;
    }
}
function changeProductPrice(id, newPrice) {
    const product = getProductById(id);
    if (product) {
        product.price = newPrice;
    }
}
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
}
createInitialProducts();
console.log("All Products:", getAllProducts());
console.log("Product 1:", getProductById(1));

updateProductDescription(1, "Updated description for product 1.");
console.log("Updated Product 1:", getProductById(1));

changeProductImage(2, "newImage2.jpg");
console.log("Updated Product 2:", getProductById(2));

changeProductPrice(3, 25.99);
console.log("Updated Product 3:", getProductById(3));

deleteProduct(1);
console.log("All Products after deletion:", getAllProducts());