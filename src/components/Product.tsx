// src/components/Product.tsx
import React from "react";
import useStore from "@/components/usestore";

interface ProductProps {
  product: {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    graduacion: number;
    imagen: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="flex flex-col justify-between rounded-md border-2 shadow-lg p-4">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="w-36 mx-auto"
       
      />
      <h3 className="text-xl font-bold text-center">{product.nombre}</h3>
      
      <p className="text-red-700 italic font-bold text-xl">Precio: ${product.precio.toFixed(2)}</p>
      <p>Graduación: {product.graduacion}%</p>
      <button className="mt-5 rounded-md bg-blue-800 text-white px-2 py-1"
      onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default Product;
