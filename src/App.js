import React from "react";
import { useAxios } from "./hooks";
import "./app.css";

export const App = () => {
  const [products, loading] = useAxios("./products.json");
  console.log(products);

  return <div>App</div>;
};
