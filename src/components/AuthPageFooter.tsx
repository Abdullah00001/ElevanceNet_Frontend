import { FC } from "react";
import { authPageFooterItems } from "../constants/authPageFooterItems";
import { Link } from "react-router-dom";

const AuthPageFooter: FC = () => {
  return (
    <footer className="w-full py-6">
      <div className="flex flex-col items-center space-y-3 text-center">
        <div className="h-px w-full max-w-screen-lg bg-gray-300"></div>

        <div className="flex flex-wrap justify-center gap-4 text-sm ">
          {authPageFooterItems.map((item) => (
            <Link key={item.path} to={item.path} className="hover:underline">
              {item.pageName}
            </Link>
          ))}
        </div>

        <h6 className="text-sm font-bold ">© ElevanceNet 2025</h6>
      </div>
    </footer>
  );
};

export default AuthPageFooter;
