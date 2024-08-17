'use client'
import create from 'zustand';

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  graduacion: number;
  imagen: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  totalItems: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const useStore = create<CartState>((set) => ({
  cart: [],
  totalItems: 0,

  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        return {
          cart: state.cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
          totalItems: state.totalItems + 1,
        };
      }
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const existingProduct = state.cart.find(item => item.id === productId);
      if (!existingProduct) return state; // Asegúrate de devolver el estado actual si no se encuentra el producto

      if (existingProduct.quantity > 1) {
        return {
          cart: state.cart.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalItems: state.totalItems - 1,
        };
      } else {
        return {
          cart: state.cart.filter(item => item.id !== productId),
          totalItems: state.totalItems - 1,
        };
      }
    }),

  clearCart: () => set({ cart: [], totalItems: 0 }),
}));

export default useStore;
