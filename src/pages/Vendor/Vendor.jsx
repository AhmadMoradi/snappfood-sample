import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import Default from "~/layout/Default";
import { VendorInfo, VendorMenu, VendorMenuNav } from "~/components/vendor";
import Loader from "~/components/common/loader/Loader";

import vendorReducer from "./vendorReducer";
import { fetchVendor } from "~/http-client/api-services";

const Vendor = () => {
  const { id } = useParams();
  const initialState = {
    vendorCode: null,
    vendorData: null,
    isLoading: true,
  };
  const [state, localDispatch] = useReducer(vendorReducer, initialState);

  useEffect(() => {
    const vendorCode = id.split("-r-")[1];
    localDispatch({ type: "SET_VENDOR_CODE", payload: vendorCode });
  }, []);

  useEffect(() => {
    localDispatch({ type: "GET_VENDOR" });
    (async () => {
      const { vendorCode } = state;
      if (vendorCode) {
        const { data } = await fetchVendor({ vendorCode });
        localDispatch({ type: "SET_VENDOR_DATA", payload: data.data });
      }
    })();
  }, [state.vendorCode]);

  if (state.isLoading) {
    return (
      <Default>
        <div className="flex items-center justify-center">
          {state.isLoading && <Loader />}
        </div>
      </Default>
    );
  }

  return (
    <Default>
      <div className="container mx-auto max-w-7xl mt-10">
        <div className="grid grid-cols-[25%_50%] gap-8">
          <aside>
            <dir className="sticky top-[4.5rem]">
              <VendorInfo vendor={state.vendorData?.vendor} />
              <VendorMenuNav menus={state.vendorData?.menus} />
            </dir>
          </aside>
          <VendorMenu menus={state.vendorData?.menus} />
        </div>
      </div>
    </Default>
  );
};

export default Vendor;
