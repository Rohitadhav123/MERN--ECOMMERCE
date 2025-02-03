import React from 'react'
import { NavLink } from 'react-router-dom'
function AdminMenu() {
  return (
    <>
  <div className="text-center"> <div className="list-group">
    <h4>Admin Panel</h4>
  <NavLink to="/dashbord/admin/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
  <NavLink to="/dashbord/admin/create-product" className="list-group-item list-group-item-action">Create Product</NavLink>
  <NavLink to="/dashbord/admin/product" className="list-group-item list-group-item-action"> Product</NavLink>
  <NavLink to="/dashbord/admin/orders" className="list-group-item list-group-item-action"> Order</NavLink>
  <NavLink to="/dashbord/admin/user" className="list-group-item list-group-item-action">Users</NavLink>
</div>
</div>
    </>
  )
}

export default AdminMenu
