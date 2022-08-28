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
