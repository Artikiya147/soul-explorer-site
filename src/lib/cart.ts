export type CartItem = {
  id: string;
  name: string;
  price: number;
  img?: string;
  meta?: string;
  qty: number;
};

const CART_KEY = "sx_cart";
export const CART_CHANGE_EVENT = "sx-cart-change";
export const CART_OPEN_EVENT = "sx-cart-open";

export function cartGet(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function cartSet(items: CartItem[]) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch {}
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CART_CHANGE_EVENT));
  }
}

export function cartCount(): number {
  return cartGet().reduce((n, i) => n + i.qty, 0);
}

export function cartAdd(item: Omit<CartItem, "qty">, qty = 1, notify = true) {
  const items = cartGet();
  const existing = items.find((i) => i.id === item.id);
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({ ...item, qty });
  }
  cartSet(items);
  if (notify && typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CART_OPEN_EVENT));
  }
}

export function cartSetQty(id: string, qty: number) {
  const items = cartGet().map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  cartSet(items);
}

export function cartRemove(id: string) {
  cartSet(cartGet().filter((i) => i.id !== id));
}

export function cartClear() {
  cartSet([]);
}
