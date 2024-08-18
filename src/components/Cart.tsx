import React from 'react';
import useStore from '@/components/usestore';

const Cart: React.FC = () => {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const totalItems = useStore((state) => state.totalItems);
  const totalCost = useStore((state) => state.getTotalCost); // Función para obtener el costo total

  return (
    <div className="w-9/12 mt-5 mx-auto">
      <h2 className="text-3xl text-center font-bold mb-4">Carrito de Compras</h2>
      <p className="text-xl text-center font-bold mb-4">Total de artículos: {totalItems} Costo: ${totalCost().toFixed(2)}</p>
      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Imagen</th>
              <th className="border px-4 py-2">Nombre</th>
              <th className="border px-4 py-2">Cantidad</th>
              <th className="border px-4 py-2">Precio</th>
              <th className="border px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="border px-4 py-2">
                  <img src={item.imagen} className="w-20" />
                </td>
                <td className="border px-4 py-2">{item.nombre}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">${item.precio.toFixed(2)}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
