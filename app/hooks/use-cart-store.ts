import { create } from "zustand";
import { Products } from "../types";
import { persist } from "zustand/middleware";

export interface CartItem extends Products {
    qty: number;
}

export interface CustomerInfo {
    customerName: string;
    customerContact: string;
    customerAddress: string;
}

interface ICartStore {
    customerInfo: CustomerInfo | null;
    items: CartItem[];
    setCustomerInfo: (info: CustomerInfo) => void;
    addItem: (product: Products, qty?: number) => void;
    removeItem: (productId: string) => void;
    resetCart: () => void;
}
export const useCartStore = create<ICartStore>()(
    persist(
        (set, get) => ({
            customerInfo: null,
            items: [],
            setCustomerInfo: (info) => {
                set({ customerInfo: info });
            },
            addItem: (product, qty = 1) => {
                const items = get().items;
                const existingItem = items.find((item) => item._id === product._id);
                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item._id === product._id ? { ...item, qty: item.qty + qty } : item
                        ),
                    });
                } else {
                    set(
                        { items: [...items, { ...product, qty }], }
                    );
                }
            },
            removeItem: (productId) => {
                set(
                    { items: get().items.filter((item) => item._id !== productId), }
                );
            },
            resetCart: () => {
                set({ items: [], customerInfo: null });
            },
        }),
        {
            name: "cart-storage",

        }
    ),
);