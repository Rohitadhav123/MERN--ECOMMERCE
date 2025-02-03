import React from "react";
import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <div className="text-center">
      {" "}
      <div className="list-group">
        <h4>User Panel</h4>
        <NavLink
          to="/dashbord/user/profile"
          className="list-group-item list-group-item-action"
        >
         Profile
        </NavLink>
        <NavLink
          to="/dashbord/user/order"
          className="list-group-item list-group-item-action"
        >
          Order
        </NavLink>
      </div>
    </div>
  );
}

export default UserMenu;
