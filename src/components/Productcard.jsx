import React from "react";
import { Link } from "react-router-dom";

const Productcard = ({ product }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-50 object-cover "
      />
      <div className="py-7 bg-white px-3">
        <h3 className="text-gray-600 font-semibold pb-2 line-clamp-2 overflow h-12 overflow-hidden">
          {product.name}
        </h3>
        <p className="text-blue-500 font-semibold pb-2">$ {product.price}</p>
        <div className="flex gap-2 text-white">
          <Link
            className="bg-gray-400 px-3 text-xs py-2 rounded"
            to={`products/${product.id}`}
          >
            View Details
          </Link>
          <button className="bg-blue-400 px-3 py-2 text-xs rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
