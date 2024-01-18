import React, { useState } from "react";
import ProductHeader from "./components/ProductHeader";
import FormInputs from "./components/FilteredSections";
import MyTable from "./components/MyTable";

const Products = () => {
  const [rowData,setRowData]=useState([]);
  
    return (
    <div className="p-4 h-screen overflow-y-auto scrollbar-hide">
     <ProductHeader/>
      <FormInputs rowData ={rowData} setRowData={setRowData}/>
      <MyTable />
    </div>
  );
};

export default Products;
