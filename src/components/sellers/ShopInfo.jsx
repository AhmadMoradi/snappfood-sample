import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { engToPerDigits, numberHumanize } from "~/utils";

const ShopInfo = ({ shop: { data: shop } }) => {
  const {
    backgroundImage,
    featured,
    title,
    description,
    commentCount,
    is_express,
    delivery_fee,
  } = shop || {};
  return (
    <Link to="/" className="shadow rounded-lg overflow-hidden">
      <div className="min-h-[11rem] max-h-44 relative">
        <div className="max-h-36 overflow-hidden">
          <img
            src={backgroundImage}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute m-auto h-[5.5rem] w-[5.5rem] left-0 right-0 bottom-0 flex items-center justify-center rounded-xl bg-white shadow-md">
          <img src={featured} loading="lazy" className="rounded-xl h-20 w-20" />
        </div>
      </div>
      <div className="mt-7 pb-8 h-40 flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-lg mb-2 truncate">{title}</h2>
          <div className="mb-2">
            <p className="text-xs text-gray-500">
              ( {engToPerDigits(numberHumanize(commentCount))} امتیاز)
            </p>
          </div>
          <h3 className="text-xs text-gray-500">{description}</h3>
        </div>
        <div className="flex justify-between w-1/2 mx-auto text-xs">
          <p>{is_express ? "ارسال اکسپرس" : "پیک فروشنده"}</p>
          <span>{engToPerDigits(numberHumanize(delivery_fee))} تومان</span>
        </div>
      </div>
    </Link>
  );
};

ShopInfo.propTypes = {
  shop: PropTypes.object.isRequired,
};

export default ShopInfo;
