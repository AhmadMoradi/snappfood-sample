import PropTypes from "prop-types";

import Loader from "~/components/common/loader/Loader";
import ShopInfo from "./ShopInfo";

const SellersList = ({ sellers }) => {
  return (
    <>
      {!sellers ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-3 gap-4 basis-3/4 px-4">
          {sellers.map((shop) => (
            <ShopInfo shop={shop} key={shop.data.id} />
          ))}
        </div>
      )}
    </>
  );
};

SellersList.propTypes = {
  sellers: PropTypes.array,
};

export default SellersList;
