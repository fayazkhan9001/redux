import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Contact />}>
        <Route path="/contact" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
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
