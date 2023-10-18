import { Button, ButtonBorder } from "./button";
import Logo from "../assets/logo.png";
import { IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  let iconStyles = { fontSize: "24px" };
  return (
    <div className="navbar bg-base-100 py-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
            <IoMenuOutline style={iconStyles} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Nutritions</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="w-6 flex gap-2">
          <img src={Logo} alt="NutriBiteEats Logo" />
          <h1 className="self-center font-bold text-2xl">NutriBiteEats</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Nutritions</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <ButtonBorder type="button" label="Sign Up" />
        <Button type="button" label="Login" />
      </div>
    </div>
  );
}
