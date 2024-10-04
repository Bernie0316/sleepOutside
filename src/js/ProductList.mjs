import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `
        <li class="product-card">
        <a href="product_pages/index.html?product=${product.Id}">
            <img src="${product.imageUrl}" alt="Image of ${product.name}">
            <h3 class="card__brand">${product.brand}</h3>
            <h2 class="card__name">${product.name}</h2>
            <p class="product-card__price">$${product.price}</p>
        </a>
        </li>
    `;
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        // We passed in this information to make our class as reusable as possible.
        // Being able to define these things when we use the class will make it very flexible
        this.category = category;   // products class 
        this.listElement = listElement; // HTML element
        this.dataSource = dataSource; 
    }

    filterProducts(products, count = 4) {
        return products.slice(0, count);
    }

    async init() {
        // our dataSource will return a Promise...so we can use await to resolve it.
        const list = await this.dataSource.getData();
        const filteredList = this.filterProducts(list, 4);
        this.renderList(filteredList);
    }

    renderList(products) {
        renderListWithTemplate(productCardTemplate, this.listElement, products, "afterbegin", ture);
    }
}