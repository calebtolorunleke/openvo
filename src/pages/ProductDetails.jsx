import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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
    <div className="max-w-7xl mx-auto px-12 py-16 flex justify-center ">
      <div className="bg-white py-6 px-6 rounded-md grid grid-cols-2 gap-10 max-w-2xl">
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-70 object-cover object-center rounded"
          />
        </div>
        <div className="w-full">
          <h1 className="text-2xl font-semibold text-gray-600 pb-3">
            {product.name}
          </h1>
          <p className="pb-3 font-semibold text-xl text-blue-500">
            $ {product.price}
          </p>
          <p className="text-gray-400 text-md pb-3">{product.description}</p>
          <button className="bg-blue-500 text-white px-3 py-2 rounded pointer-cursor">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
