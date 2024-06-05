
import { Product } from '../product';
import { CartItem } from '../../shopping-cart/cart-item.ts';

export function mapProductToCartItem(product: Product): CartItem {
  const { imageUrl, name, price } = product;

  return { imageUrl, name, price };
}
