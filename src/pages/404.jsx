import { Link } from "react-router-dom";

import Default from "~/layout/Default";

const NotFound = () => (
  <Default>
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl mb-4">صفحه مورد نظر پیدا نشد.</h1>
      <Link to="/" className="text-blue-500 underline">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  </Default>
);

export default NotFound;
