import { Product } from './product';

export class CartItem {

    product: Product;
    quantity: number;

    constructor(p?: Product, q?: number) {
        this.product  = p || null;
        this.quantity = q || 0;
    }
}
