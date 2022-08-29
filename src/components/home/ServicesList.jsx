import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Loader from "~/components/common/loader/Loader";

const ServicesList = () => {
  const { services, isLoadingServices } = useSelector(
    ({ services: { services, isLoadingServices } }) => ({
      services,
      isLoadingServices,
    })
  );

  const Services = services.map((service) => {
    const { id, title, icon, is_link_external, deepLink } = service;
    const Content = (
      <div className="grid gap-y-2 justify-items-center">
        <img src={icon[0]} width="40" height="40" />
        <span className="text-xs">{title}</span>
      </div>
    );
    const to = is_link_external ? null : `/sellers?superType=${id}`;
    return to ? (
      <Link to={to} key={id} className="grow">
        {Content}
      </Link>
    ) : (
      <a href={deepLink} key={id} className="grow" target="_blank">
        {Content}
      </a>
    );

    return;
  });

  return (
    <>
      {isLoadingServices ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <nav className="flex py-4">{Services}</nav>
      )}
    </>
  );
};

export default ServicesList;
