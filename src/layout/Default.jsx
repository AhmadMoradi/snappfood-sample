import { Link } from "react-router-dom";

import snappfoodLogo from "~/assets/images/snappfood-logo.svg";

const Default = ({ children }) => {
  return (
    <div className="default-layout">
      <header className="h-16">
        <div className="fixed z-10 bg-white h-16 top-0 left-0 right-0 mb-4 px-3 py-4 border-solid border-b border-slate-300">
          <Link to="/">
            <img src={snappfoodLogo} alt="اسنپ فود" />
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Default;
