import Api from "~/http-client/api.js";

export function fetchServices(params) {
  return Api.get("search/api/v1/desktop/service", {
    params,
  });
}

export const fetchHomeData = (params) => {
  return Api.get("/search/api/v1/desktop/new-home", { params });
};

export const fetchSellers = (params) => {
  return Api.get("/search/api/v1/desktop/vendors-list", { params });
};

export const fetchVendor = (params) => {
  const defultParams = {
    optionalClient: "WEBSITE",
    "fetch-static-data": 1,
  };
  const mergedParams = { ...defultParams, ...params };
  return Api.get("/mobile/v2/restaurant/details/dynamic", {
    params: mergedParams,
  });
};
