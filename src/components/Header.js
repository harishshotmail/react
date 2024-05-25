import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnLineStatus";

const Header = () => {
  const [status, setStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="" src={LOGO_URL} />
      </div>
      <div className="navigation-items-container">
        <ul className="navigation-items">
        <li className="navigation-item">
            Online Status: {onlineStatus ? "🟢":"🔴"}
          </li>
          <li className="navigation-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation-item">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="navigation-item">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="navigation-item">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="navigation-item">
            <Link to="/grocery"> grocery</Link>
          </li>
          <li className="navigation-item">
            <button
              className="cursor"
              onClick={() => {
                status == "Login" ? setStatus("Logout") : setStatus("Login");
              }}
            >
              {status}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
