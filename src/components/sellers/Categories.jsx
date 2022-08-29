import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Categories = ({ categories: { data: categories } }) => {
  if (!(categories && categories.length)) {
    return;
  }
  const location = useLocation();
  const calcTo = (id) => {
    const searchParams = new URLSearchParams(location.search);
    if (id === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", id);
    }
    return { ...location, search: `?${searchParams.toString()}` };
  };
  const noCatSelected = !categories.find((c) => c.selected === true);
  return (
    <>
      {
        <nav className="p-3 border rounded-lg border-light-300">
          <Link
            to={calcTo("all")}
            className={`flex items-center justify-start text-sm h-10 ${
              noCatSelected ? "bg-gray-100 px-3 rounded-md" : ""
            }`}
          >
            همه دسته بندی ها
          </Link>
          {categories.map((cat) => (
            <Link
              to={calcTo(cat.value)}
              key={cat.value}
              className={`flex items-center justify-start text-sm h-10 ${
                cat.selected ? "bg-gray-100 px-3 rounded-md" : ""
              }`}
            >
              <img src={cat.image} width="32" height="32" className="ml-2" />
              {cat.title}
            </Link>
          ))}
        </nav>
      }
    </>
  );
};

Categories.defaultProps = {
  categories: {},
};

Categories.prototype = {
  categories: PropTypes.array,
};

export default Categories;
