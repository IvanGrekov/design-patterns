interface IProduct {
    id: string;
    name: string;
    price: number;
}

class Product {
    constructor(
        protected id: IProduct['id'],
        protected name: IProduct['name'],
        protected price: IProduct['price']
    ) {}

    public getId(): IProduct['id'] {
        return this.id;
    }

    public getName(): IProduct['name'] {
        return this.name;
    }

    public getPrice(): IProduct['price'] {
        return this.price;
    }
}

class ProductsService {
    protected products: Product[] = [];

    constructor() {
        this.products = [
            new Product('1', 'IPhone', 1000),
            new Product('2', 'Apple Watch', 500),
            new Product('3', 'MacBook', 3000),
        ];
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public getProducts(): Product[] {
        return this.products;
    }
}

class CartService {
    protected cart: Product[] = [];

    public addProduct(product: Product): void {
        const cartIncludesProduct = this.cart.some((cartProduct) => cartProduct.getId() === product.getId());
        
        if (cartIncludesProduct) {
            console.warn('Product already in cart');
        } else {
            this.cart.push(product);
        }
    }

    public getCart(): Product[] {
        return this.cart;
    }

    public clearCart(): Product[] {
        return this.cart = [];
    }
}

class OrderService {
    public order(products: Product[]): void {
        console.group('Ordering products:');
        products.forEach((product) => {
            console.log(`Product: ${product.getName()}, price: ${product.getPrice()}`);
        });
        console.groupEnd();
    }
}

class ShopFacade {
    protected productsService: ProductsService;
    protected cartService: CartService;
    protected orderService: OrderService;

    constructor() {
        this.productsService = new ProductsService();
        this.cartService = new CartService();
        this.orderService = new OrderService();
    }

    public getProducts(): Product[] {
        return this.productsService.getProducts();
    }

    public addProductToCart(product: Product): void {
        const isProductAvailable = this.productsService.getProducts().includes(product);

        if (isProductAvailable) {
            this.cartService.addProduct(product);
            console.log(`Product "${product.getName()}" added to cart`);
        } else {
            console.warn('Product can\'t bought');
        }
    }

    public order(): void {
        const cart = this.cartService.getCart();

        if (cart.length) {
            this.orderService.order(cart);
            this.cartService.clearCart();
        } else {
            console.warn('Cart is empty');
        }
    }
}

const shop = new ShopFacade();

const someProduct = new Product('4', 'Some product', 100);
shop.addProductToCart(someProduct);
console.log('------------');
const products = shop.getProducts();
console.log('products', products);
console.log('------------');
shop.addProductToCart(products[0]);
shop.addProductToCart(products[1]);
console.log('------------');
shop.order();
console.log('------------');
shop.order();
