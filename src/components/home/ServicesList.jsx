import { useSelector } from "react-redux";

import Loader from "~/components/common/loader/Loader";

const ServicesList = () => {
  const { services, isLoadingServices } = useSelector(
    ({ services: { services, isLoadingServices } }) => ({
      services,
      isLoadingServices,
    })
  );

  const Services = services.map((service) => (
    <a href="" key={service.id} className="grow">
      <div className="grid gap-y-2 justify-items-center">
        <img src={service.icon[0]} width="40" height="40" />
        <span className="text-xs">{service.title}</span>
      </div>
    </a>
  ));

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
