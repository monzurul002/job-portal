import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navItems = (
    <>
      {" "}
      <li>
        <Link to="/home"> Home</Link>
      </li>
      <li>
        <Link to="/home"> Home</Link>
      </li>
      <li>
        <Link to="/home"> Home</Link>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut().then((result) => {
      console.log(result);
    });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <>
            {" "}
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
          </>
        ) : (
          <button onClick={handleLogOut} className="btn bg-red-600 text-white">
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
