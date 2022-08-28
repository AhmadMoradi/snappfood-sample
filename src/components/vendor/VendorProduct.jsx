import React from "react";
import PropTypes from "prop-types";

const VendorProduct = ({ product }) => {
  const { title, description, price } = product;
  const thumbSrc = product.images[0]?.imageThumbnailSrc;
  return (
    <div className="basis-1/2 py-4 border-b border-r border-solid border-gray-100 flex flex-col ">
      <div className="flex px-4 grow justify-between">
        <div className="pl-4 pt-4">
          <h2 className="text-base font-bold">{title}</h2>
          <strong className="text-xs font-normal text-gray-500">
            {description}
          </strong>
        </div>
        <div className="flex-shrink-0">
          <img src={thumbSrc} height="112" width="112" />
        </div>
      </div>
      <div className="px-3 h-16 flex items-center justify-between px-3">
        <span>{price}</span>
        <button
          style={{
            backgroundColor: "rgb(255, 56, 172)",
            color: "white",
            padding: "0.5rem 1.5rem",
          }}
          className="rounded-full"
        >
          افزودن
        </button>
      </div>
    </div>
  );
};

VendorProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default VendorProduct;
