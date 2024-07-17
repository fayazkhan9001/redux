import React, { useEffect, useState } from "react";
import axios from "axios";
function Products() {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => getProducts(res.data))
      .catch((err) => console.log(errr));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl p-2 underline underline-offset-4">
        Products Dashboard
      </h1>
      <div className="flex flex-wrap justify-center">
        {products?.map((product, idx) => {
          return <Card product={product} key={idx} />;
        })}
      </div>
    </div>
  );
}

export default Products;

function Card({ product }) {
  return (
    <div className="p-2">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80 h-[460px]">
        <div className="relative overflow-hidden">
          <img
            className="object-cover w-[200px] h-[250px] m-auto"
            src={product.image}
            alt="Product"
          />
          <div className="absolute inset-0  opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-500 py-2 px-6 rounded-full font-bold hover:bg-gray-300">
              View Product
            </button>
          </div>
        </div>
        <h3 className="text-md  text-gray-900 mt-4">{product.title}</h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-lg">
            ${product.price}
          </span>
          <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
