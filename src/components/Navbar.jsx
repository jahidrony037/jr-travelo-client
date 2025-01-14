import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import logo from "../../public/logo.svg";
import useAuth from "../hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut, show, setShow, setThemeName } = useAuth();
  const [theme, setTheme] = useState("corporate");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const getTheme = localStorage.getItem("theme");
    setThemeName(getTheme);
    document.querySelector("html").setAttribute("data-theme", getTheme);
  }, [setThemeName, theme]);
  const handleUserLogOut = () => {
    logOut()
      .then(() => {
        toast.success(
          `${user?.providerData[0]?.displayName} Logged out Successfully`
        );
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTouristSpot">All Tourists Spot</NavLink>
      </li>
      <li>
        <NavLink to="/addTouristSpot">Add Tourists Spot</NavLink>
      </li>

      <li>
        <NavLink to="/myList">My List</NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 sticky top-0 shadow-sm z-10 pl-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0 pr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center btn btn-ghost md:h-[55px] h-[40px] hover:bg-none pl-0"
          >
            <img
              src={logo}
              className="md:w-12 w-10 md:h-12 h-10 fill-[#1ec6b6]"
              alt="logo"
            />
            <p className="md:text-lg text-xs">
              <span className="block text-left text-[#1ec6b6] font-bold md:text-lg text-xs">
                JR
              </span>{" "}
              TRAVELO
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-4">
          {/* {isLoggedIn && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={`${user?.displayName} image`}
                  src={`${
                    user?.photoURL
                      ? `${user?.photoURL}`
                      : "https://lh3.googleusercontent.com/ogw/AF2bZygL7FdZadPsU_kq5JLk4iGvvTHz0m-tgJZsBCDL=s32-c-mo"
                  }`}
                  title={user?.displayName}
                />
              </div>
            </div>
          )}
          {!isLoggedIn ? (
            <Link
              to="/login"
              className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white font-bold">
                Login
              </span>
            </Link>
          ) : (
            <button
              
              className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white font-bold">
                LogOUT
              </span>
            </button>
          )} */}
          <div>
            <label className="cursor-pointer grid place-items-center">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    // console.log(e.target.checked);
                    return setTheme("dark");
                  } else {
                    // console.log(e.target.checked);
                    return setTheme("corporate");
                  }
                }}
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />

              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          {!user ? (
            <div className="flex items-center md:gap-4 gap-1">
              <Link
                to="/login"
                className="md:px-5 px-2 md:py-2 py-1 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#1ec6b6] inline-block border-[#1ec6b6] border-[1px] "
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1ec6b6]  group-hover:h-full opacity-90 "></span>
                <span className="relative group-hover:text-white font-bold">
                  Login
                </span>
              </Link>
              <Link
                to="/register"
                className="md:px-5 px-2 md:py-2 py-1 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#1ec6b6] inline-block border-[#1ec6b6] border-[1px] "
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#1ec6b6]  group-hover:h-full opacity-90 "></span>
                <span className="relative group-hover:text-white font-bold">
                  Register
                </span>
              </Link>
            </div>
          ) : (
            <div
              className="dropdown dropdown-end"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn border-[1px] border-[#1ec6b6] hover:bg-[#1ec6b6]  btn-circle avatar"
              >
                <div
                  data-tooltip-id="profile-image"
                  data-tooltip-content={`${user?.providerData[0]?.displayName}`}
                  className="w-10 rounded-full"
                >
                  <img
                    alt="user-photo"
                    src={`${user?.providerData[0]?.photoURL}`}
                  />
                  <Tooltip
                    id="profile-image"
                    className="z-10"
                    style={{ backgroundColor: "#1ec6b6" }}
                  />
                </div>
              </div>
              {!show ? null : (
                <ul
                  tabIndex={0}
                  className="z-[1] flex flex-col  p-2 shadow bg-base-100 rounded-box absolute right-0 space-y-5"
                >
                  <li className="w-40">
                    <Link to="" className="flex justify-between text-xs">
                      {user?.providerData[0]?.email}
                    </Link>
                  </li>

                  <li className="w-40">
                    <button
                      onClick={handleUserLogOut}
                      className="btn hover:bg-[#1ec6b6] border-[1px] border-[#1ec6b6] bg-purple-50 hover:text-white text-[#1ec6b6] w-full "
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
