import type { CartItem } from "./cart";

export type Order = {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  name: string;
  email: string;
};

const ORDERS_KEY = "sx_orders";

export function ordersGet(): Order[] {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
}

export function orderAdd(order: Omit<Order, "id" | "date">): Order {
  const full: Order = {
    ...order,
    id: "SX-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
    date: new Date().toISOString(),
  };
  const orders = ordersGet();
  orders.unshift(full);
  try {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  } catch {}
  return full;
}
