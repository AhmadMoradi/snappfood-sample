import { useState } from "react";
import PropTypes from "prop-types";

const VendorMenuNav = ({ menus }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <nav className="text-left">
      {menus &&
        menus.map((menu, index) => (
          <a
            key={menu.categoryId}
            href={`#${menu.categoryId}`}
            onClick={() => onClick(index)}
            className={
              "h-7 flex items-center justify-end " +
              (selectedIndex === index
                ? "border-l-4 border-solid border-gray-300 pl-2"
                : "pl-3")
            }
          >
            <p>{menu.category}</p>
          </a>
        ))}
    </nav>
  );
};

VendorMenuNav.propTypes = {
  menus: PropTypes.array,
};

export default VendorMenuNav;
