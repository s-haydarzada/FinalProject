import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Contexts/ProductContext.jsx";
import SidebarProvider from "./Contexts/SidebarContext.jsx";
import CardProvider from "./Contexts/CardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CardProvider>
      <ProductProvider>
      <App />
    </ProductProvider>
    </CardProvider>
    
  </SidebarProvider>
);
