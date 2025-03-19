import { FC, useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Input from "./Input";
import Avatar from "../assets/Avatar.png";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const MainNav: FC = () => {
  const [searchClick, setSearchClick] = useState<boolean>(false);

  const handleShowSearchBar = () => {
    setSearchClick(!searchClick);
  };

  return (
    <section className="shadow-md ">
      <div className="max-w-[1144px] w-full mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link to="/">
              <img className="w-[90px] md:w-[100px]" src={Logo} alt="Logo" />
            </Link>
          </div>

          {/* Search Bar & Profile */}
          <div className="flex items-center space-x-5">
            {/* Search Button & Input Field */}
            <div className="relative">
              {!searchClick ? (
                <button
                  onClick={handleShowSearchBar}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                >
                  <FaSearch className="text-gray-600" />
                  <span className="text-gray-600">Search</span>
                </button>
              ) : (
                <div className="relative flex items-center">
                  <Input
                    type="text"
                    id="searchBar"
                    name="searchBar"
                    placeholder="Search..."
                    style="border border-gray-300 rounded-lg px-4 py-2 w-[200px] md:w-[250px] lg:w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <IoCloseSharp
                    onClick={handleShowSearchBar}
                    className="absolute right-3 text-gray-500 hover:text-gray-800 cursor-pointer text-xl"
                  />
                </div>
              )}
            </div>

            {/* User Avatar */}
            <div className="flex items-center">
              <img
                src={Avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default MainNav;
