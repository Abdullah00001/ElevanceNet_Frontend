import { FC } from "react";
import Avatar from "../assets/Avatar.png";

const Home: FC = () => {
  return (
    <section>
      <div className="max-w-[1144px] w-full mx-auto px-4">
        <div className="flex flex-center items-center space-x-5">
          <div className="w-[65%] flex flex-col ">
            <div className="w-full mt-8 border px-4 py-3 rounded-[18px] flex items-center space-x-3">
              <div>
                <img
                  src={Avatar}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                />
              </div>
              <div>
                <h1 className="text-[24px]">Whats On Your Mind !</h1>
              </div>
            </div>
            <div className="flex flex-col "></div>
          </div>
          <div className="w-[35%]">
            <h1 className="text-5xl">hello</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
