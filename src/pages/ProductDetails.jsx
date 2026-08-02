import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div>ProductDetails Page {id}</div>
    </div>
  );
};

export default ProductDetails;
