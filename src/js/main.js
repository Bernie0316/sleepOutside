import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";

const category = 'tents'
const productData = new ProductData(category);
const listElement = document.querySelector(`#product-list`);

const productListing = new ProductListing(category, productData, listElement);
productListing.init();