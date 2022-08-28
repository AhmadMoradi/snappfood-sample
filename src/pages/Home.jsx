import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Default from "~/layout/Default";
import ServicesList from "~/components/home/ServicesList";
import Categories from "~/components/home/Categories";

import { getServices } from "~/redux/features/services/sericesService";
import { getHomeData } from "~/redux/features/home/homeService";

const Home = () => {
  const dispatch = useDispatch();
  const params = useSelector(({ general: { lat, long } }) => ({
    lat,
    long,
  }));

  useEffect(() => {
    dispatch(getServices(params));
    dispatch(getHomeData(params));
  }, []);

  return (
    <Default>
      <ServicesList />
      <main className="container mx-auto max-w-7xl mt-8">
        <Categories />
      </main>
    </Default>
  );
};

export default Home;
