import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../reduxStore/cartSlice";
import { RadialGradient } from "react-text-gradients";

function CartProduct() {
  const product = useSelector((state) => state.cart);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl p-2 underline underline-offset-4">
        Cart Products Dashboard
      </h1>
      <div className="flex flex-wrap justify-center">
        {product?.length < 1 ? (
          <h1 className="text-4xl mt-40 font-mono">
            <RadialGradient gradient={["red, blue"]}>
              Cart is empty
            </RadialGradient>
          </h1>
        ) : (
          product?.map((product, idx) => {
            return <Card product={product} key={idx} />;
          })
        )}
      </div>
    </div>
  );
}

export default CartProduct;

function Card({ product }) {
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(remove(id));
  };
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
          <button
            onClick={() => removeCart(product.id)}
            className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
          >
            Remove item
          </button>
        </div>
      </div>
    </div>
  );
}
