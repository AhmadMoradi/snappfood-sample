import PropTypes from "prop-types";

import Product from "./VendorProduct";

const VendorMenu = ({ menus }) => {
  return (
    <div className="border-y border-l rounded-xl overflow-hidden">
      {menus &&
        menus.map((menu) => (
          <div key={menu.categoryId}>
            <p
              id={menu.categoryId}
              style={{
                scrollMarginTop: "4.5rem",
              }}
              className="flex items-center justify-center h-12 text-xs font-bold border-b border-r border-solid border-gray-100"
            >
              {menu.category}
            </p>
            <div className="flex flex-wrap">
              {menu.products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

VendorMenu.propTypes = {
  menus: PropTypes.array,
};

export default VendorMenu;
