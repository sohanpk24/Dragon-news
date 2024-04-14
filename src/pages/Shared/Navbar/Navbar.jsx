import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

  const navLink = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/about">About</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/careen">Career</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/login">Login</NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={userDefaultPic} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <div tabIndex={0} role="button" className=" ">
              <img className="" src={userDefaultPic} />
            </div>
          </div>
        </label>
        {user ? (
          <button onClick={handleSignOut} className="btn">Sign Out</button>
        ) : (
          <Link>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
