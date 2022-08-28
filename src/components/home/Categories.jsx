import { useSelector } from "react-redux";

import Loader from "~/components/common/loader/Loader";

const Categories = () => {
  const { categories, status } = useSelector(
    ({ home: { categories, status } }) => ({
      status,
      categories,
    })
  );
  const cuisines = categories?.data?.cuisines;
  const CuisinesList =
    cuisines &&
    cuisines.map((c) => (
      <div key={c.id} className="p-4 basis-1/6">
        <a href="#">
          <div className="p-0.25 overflow-hidden rounded-xl relative">
            <img src={c.icon} />
            <div className="absolute bottom-0 right-0 rounded-tl-xl bg-white px-3 py-1 flex items-center">
              {c.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6.58"
                height="11.17"
                viewBox="0 0 9 16"
                fill="#FF00A6"
                className="mr-2 mt-1"
              >
                <path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path>
              </svg>
            </div>
          </div>
        </a>
      </div>
    ));

  return (
    <>
      {status === "loading" ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <section>
          <h2 className="font-bold mb-4">دسته بندی ها</h2>
          <div className="flex flex-wrap">{CuisinesList}</div>
        </section>
      )}
    </>
  );
};

export default Categories;
