'use client'
import Cart from "@/components/Cart";
import Product from "@/components/Product";

const products = [
  {
    id: 1,
    nombre: "CAMPO BURGO RESERVA 2018",
    descripcion: "Tradición y calidad son las señas de identidad de Bodegas Isidro Milagro. Disfruta de su Campo Burgo Reserva 2018, un rioja de perfil clásico, con un tanino noble, maduro y redondo, aterciopelado, con volumen en boca y un perfecto equilibrio entre la fruta madura y la barrica.",
    precio: 10.5,
    graduacion: 13.5,
    imagen: "https://res.cloudinary.com/dkrew530b/image/upload/v1719863077/fo7xxbtviptvh1x7uwme.webp",
  },
  {
    id: 2,
    nombre: "CUNE GRAN RESERVA 2017",
    descripcion: "Cune Gran Reserva 2017 es un tinto que reúne toda la complejidad que ha dado fama mundial a Rioja y ofrece un estilo actual de entender los grandes reservas. CVNE, una marca centenaria que es también una de las más conocidas de Rioja, te ofrece ahora su 'top' de la gama. Un Gran Reserva con el que la firma demuestra que las grandes bodegas logran elaborar grandes vinos en añadas difíciles.",
    precio: 12.0,
    graduacion: 14.0,
    imagen: "https://res.cloudinary.com/dkrew530b/image/upload/v1719863376/kaznug3n7aihmi6oozu2.webp",
  },
  {
    id: 3,
    nombre: "CUNE SEMIDULCE",
    descripcion: "Un blanco suave y fresco producto de la sobremaduración. Cune Semidulce conserva toda la frescura de los blancos jóvenes secos, y la elegancia y suavidad de los tradicionales vinos dulces de Rioja.",
    precio: 5.2,
    graduacion: 12.28,
    imagen: "https://res.cloudinary.com/dkrew530b/image/upload/v1719863787/av09rgd6gkjspixdkemy.webp",
  },
  {
    id: 4,
    nombre: "CARRAMONTE CRIANZA 2021",
    descripcion: "Bodegas Viyuela se consolida como una apuesta importante y un referente en la Ribera del Duero. Como prueba, en 2019 fue reconocida por Mundus Vini como la mejor bodega de esta denominación. Ahora nos presenta Carramonte Crianza 2021. Un tinto exclusivo para Vinoselección que ya presentamos con la añada 2020. La calidad de esta cosecha 2021, calificada como Excelente en la D.O., ha hecho que no esperemos más para repetir experiencia. Disfruta ahora de este magnífico tempranillo diseñado en el término burgalés de Boada de Roa, en el corazón de la denominación. Es intenso, carnoso, de suaves taninos, tacto sedoso y final fresco.",
    precio: 15.0,
    graduacion: 14.5,
    imagen: "https://res.cloudinary.com/dkrew530b/image/upload/v1719864181/nixctxnj25jmfoubofld.webp",
  },
];


export default function Home() {
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">Tienda de Vinos</h1>
      <div className="grid grid-cols-4 gap-4 w-10/12 mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
  
}
