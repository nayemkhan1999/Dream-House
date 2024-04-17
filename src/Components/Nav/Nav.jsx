import { NavLink } from "react-router-dom";

const Nav = () => {
  const Link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/user">User</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100  shadow-md rounded-b-lg px-5 py-2 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              {Link}
            </ul>
          </div>
          <p className="font-bold text-4xl text-gray-400">
            <span className="text-5xl text-orange-500">D</span>ream{" "}
            <span className="text-orange-500">House</span>
          </p>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal  px-1">{Link}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">LOGIN</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
