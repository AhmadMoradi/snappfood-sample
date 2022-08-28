import Api from "~/http-client/api.js";

export function getServices(params) {
  return Api.get("search/api/v1/desktop/service", {
    params,
  });
}
