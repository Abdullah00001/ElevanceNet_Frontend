import { FC } from "react";
import { authPageFooterItems } from "../constants/authPageFooterItems";
import { Link } from "react-router-dom";

const AuthPageFooter: FC = () => {
  return (
    <>
      <section className="w-full">
        <div className="relative flex justify-center">
          <div className="absolute flex flex-col justify-center items-center top-[40px]">
            <div className="p-[.004rem] bg-white w-full max-w-screen-lg"></div>
            <div className="flex items-center justify-center mt-3 gap-5">
              {authPageFooterItems.map((item) => (
                <Link className="" to={item.path}>
                  {item.pageName}
                </Link>
              ))}
              <h6 className="font-bold">©ElevanceNet 2025</h6>
            </div>
            <div className="w-full h-px bg-gray-300 my-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthPageFooter;