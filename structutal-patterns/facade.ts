interface IProduct {
    id: string;
    name: string;
    price: number;
}

class Product implements IProduct {
    constructor(
        public id: IProduct['id'],
        public name: IProduct['name'],
        public price: IProduct['price']
    ) {}
}

class ProductsService {
    constructor (protected products: IProduct[]) {}

    public getProducts(): IProduct[] {
        return this.products;
    }

    public addProduct(product: IProduct): void {
        this.products.push(product);
    }
}

class CartService {
    protected cart: IProduct[] = [];

    public addToCard(product: IProduct): void {
        this.cart.push(product);
    }

    public getCart(): IProduct[] {
        return this.cart;
    }

    public clearCart(): void {
        this.cart = [];
    }
}

class OrderService {
    public makeOrder(products: IProduct[]): void {
        console.group('Ordering products:');
        products.forEach((product) => {
            console.log(`Product: ${product.name}, price: ${product.price}`);
        });
        console.groupEnd();
    }
}

class ShopFacade {
    protected productsService: ProductsService;
    protected cartService: CartService;
    protected orderService: OrderService;

    constructor(products: IProduct[]) {
        this.productsService = new ProductsService(products);
        this.cartService = new CartService();
        this.orderService = new OrderService();
    }

    public getProducts(): IProduct[] {
        return this.productsService.getProducts();
    }

    public addToCart(product: IProduct): void {
        const isProductAvailable = this.productsService.getProducts().includes(product);

        if (isProductAvailable) {
            this.cartService.addToCard(product);
            console.log(`Product "${product.name}" added to cart`);
        } else {
            console.warn('Product can\'t be bought');
        }
    }

    public makeOrder(): void {
        const cart = this.cartService.getCart();

        if (cart.length) {
            this.orderService.makeOrder(cart);
            this.cartService.clearCart();
        } else {
            console.warn('Cart is empty');
        }
    }
}

const products = [
    new Product('1', 'Product 1', 100),
    new Product('2', 'Product 2', 200),
    new Product('3', 'Product 3', 300),
];

const someProduct = new Product('4', 'Some product', 100);

const shop = new ShopFacade(products);

shop.addToCart(someProduct);
console.log('------------');
console.log('products', shop.getProducts());
console.log('------------');
shop.addToCart(products[0]);
shop.addToCart(products[1]);
console.log('------------');
shop.makeOrder();
console.log('------------');
shop.makeOrder();
