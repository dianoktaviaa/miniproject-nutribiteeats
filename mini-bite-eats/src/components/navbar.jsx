import { Button, ButtonBorder } from "./button";
import Logo from "../assets/logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useToken } from "../utils/context/token";
import Swal from "sweetalert2";

export default function Navbar() {
  const { token, changeToken } = useToken();
  let iconStyles = { fontSize: "24px" };

  function handleLogout() {
    Swal.fire({
      title: "Are you sure want to logout?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EFD372",
      cancelButtonColor: "#FF6E6E",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        changeToken("");
        Swal.fire("Logout!", "You are successfully logout.", "success");
      }
    });
  }

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
              <Link to="/nutritions">
                <a>Nutritions</a>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <a>About Us</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="w-6 flex gap-2">
            <img src={Logo} alt="NutriBiteEats Logo" />
            <h1 className="self-center font-bold text-2xl">NutriBiteEats</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/nutritions">
              <a>Nutritions</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {token === "" && (
          <>
            <Link to="/signup">
              <ButtonBorder type="button" label="Sign Up" />
            </Link>
            <Link to="/login">
              <Button type="button" label="Login" />
            </Link>
          </>
        )}

        {token && (
          <ButtonBorder type="button" label="Logout" onClick={handleLogout} />
        )}
      </div>
    </div>
  );
}
