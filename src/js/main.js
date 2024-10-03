class ProductData {
    constructor() {
        this.dataUrl = './public/json/tents.json'; 
    }

    async fetchProducts() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error("can't link to './public/json/tents.json'");
            }
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }
}

const productData = new ProductData();

const loadProducts = async () => {
    const products = await productData.fetchProducts();
    console.log(products); // 檢查讀取到的產品數據
};

loadProducts();
