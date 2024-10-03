import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const category = 'tents'
const productData = new ProductData(category);
const listElement = document.querySelector(`#product-list`);

async function displayProducts() {
    try {
        const products = await productData.getData();
        console.log(products);
    } catch (error) {
        console.error('error when getting products', error);
    }
}

displayProducts();

const productListing = new ProductListing(category, productData, listElement);
productListing.init();