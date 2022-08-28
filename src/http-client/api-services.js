import Api from "~/http-client/api.js";

export function fetchServices(params) {
  return Api.get("search/api/v1/desktop/service", {
    params,
  });
}
