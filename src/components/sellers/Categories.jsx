import PropTypes from "prop-types";

const Categories = ({ categories: { data: categories } }) => {
  return (
    <>
      {categories && (
        <nav className="p-3 border rounded-lg border-light-300">
          <div className="flex items-center justify-start text-sm h-10 bg-gray-100 px-3 rounded-md ">
            همه دسته بندی ها
          </div>
          {categories.map((cat) => (
            <div
              key={cat.value}
              className="flex items-center justify-start text-sm h-10"
            >
              <img src={cat.image} width="32" height="32" className="ml-2" />
              {cat.title}
            </div>
          ))}
        </nav>
      )}
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
