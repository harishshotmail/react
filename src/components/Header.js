import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnLineStatus";
import { loggedUserContext } from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [status, setStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(loggedUserContext);
  const store = useSelector((state) => state.cart.items);
  return (
    <div className="bg-pink-100 flex justify-between">
      <div className="w-24">
        <img className="logo" alt="" src={LOGO_URL} />
      </div>
      <div className=" flex items-center">
        <ul className="flex items-center">
          <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/cart">Cart - {store.length} items</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery"> grocery</Link>
          </li>
          <li className="p-4">Login User: {loggedInUser}</li>
          <li className="p-4">
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
