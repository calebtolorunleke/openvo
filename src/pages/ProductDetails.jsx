import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      return navigate("/");
    }
    setProduct(foundProduct);
  }, [id, navigate]);

  if (!product) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>ProductDetails Page {product.name}</div>
    </div>
  );
};

export default ProductDetails;
