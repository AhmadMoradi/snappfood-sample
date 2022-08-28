import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Default from "~/layout/Default";
import { SellersList } from "~/components/sellers";
import { Categories } from "~/components/sellers";

import { getSellers } from "~/redux/features/sellers/sellersService";
import { getServices } from "~/redux/features/services/sericesService";

const Sellers = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { lat, long } = useSelector(({ general: { lat, long } }) => ({
    lat,
    long,
  }));
  const { sellers, categories } = useSelector(({ sellers: { data } }) => ({
    sellers: data?.finalResult,
    categories: data?.extra_sections?.categories,
  }));

  const params = useMemo(() => {
    const query = new URLSearchParams(location.search);
    const queryObj = Object.fromEntries(query);
    return {
      filters: { superType: [+queryObj.superType] },
      category: { value: +queryObj.category },
      lat,
      long,
    };
  }, [location.search]);

  useEffect(() => {
    dispatch(getServices({ lat, long }));
    dispatch(getSellers(params));
  }, []);

  return (
    <Default>
      <main className="container max-w-7xl mx-auto mt-8 flex">
        <aside className="px-4 basis-1/4 flex-shrink-0">
          <Categories categories={categories} />
        </aside>
        <SellersList sellers={sellers} />
      </main>
    </Default>
  );
};

export default Sellers;
