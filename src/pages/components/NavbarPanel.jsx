import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RadialGradient } from "react-text-gradients";

function NavbarPanel() {
  const cartProduct = useSelector((state) => state.cart);
  return (
    <div>
      <div className="max-w-5xl flex justify-between mx-auto p-3">
        <div>
          <h1 className="text-2xl font-bold">Redux-toolkit</h1>
        </div>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link>Service</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Link to={"/cartproduct"}>
            <MdOutlineShoppingCart className="text-2xl font-bold absolute" />{" "}
            <spin className="relative bottom-4 left-3 font-bold text-sm text-blue-700">
              <RadialGradient gradient={["red, blue"]}>
                {cartProduct.length}
              </RadialGradient>
            </spin>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarPanel;
