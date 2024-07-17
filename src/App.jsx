import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import RootLayout from "./pages/components/RootLayout";
import Products from "./pages/Products";
import CartProduct from "./pages/components/CartProduct";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cartproduct" element={<CartProduct />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
