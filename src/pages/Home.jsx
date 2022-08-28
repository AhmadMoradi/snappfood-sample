import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Default from "~/layout/Default";
import ServicesList from "~/components/home/ServicesList";

import { getServices } from "~/redux/features/services/sericesService";

const Home = () => {
  const dispatch = useDispatch();
  const params = useSelector(({ general: { lat, long } }) => ({
    lat,
    long,
  }));

  useEffect(() => {
    dispatch(getServices(params));
  }, []);

  return (
    <Default>
      <ServicesList />
    </Default>
  );
};

export default Home;
