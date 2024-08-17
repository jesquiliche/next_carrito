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
    <div className="flex flex-col justify-between">
      <img
        src={product.imagen}
        alt={product.nombre}
       
      />
      <h3 className="text-xl font-bold text-center">{product.nombre}</h3>
      
      <p>Precio: ${product.precio.toFixed(2)}</p>
      <p>Graduación: {product.graduacion}%</p>
      <button className="rounded-md bg-gray-900 text-white px-2 py-1"
      onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default Product;
