import PropTypes from "prop-types";

import { engToPerDigits, numberHumanize } from "~/utils";

const VendorInfo = ({ vendor }) => {
  if (!vendor) return;
  return (
    <article className="inline-grid grid-cols-[auto_auto] items-center gap-x-1">
      <img
        src={vendor.logo}
        width="80"
        height="80"
        className="row-span-2 rounded-lg"
      />
      <span className="text-xs text-gray-300 self-end">
        ({engToPerDigits(numberHumanize(vendor.commentCount))} نظر)
      </span>
      <h1 className="text-sm font-bold">{vendor.title}</h1>
    </article>
  );
};

VendorInfo.propTypes = {
  vendor: PropTypes.object,
};

export default VendorInfo;
