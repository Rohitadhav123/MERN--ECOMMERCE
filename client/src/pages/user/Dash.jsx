import React from 'react'
import Layout from '../../component/layout/layout'
import UserMenu from '../../component/layout/UserMenu'
import { useAuth } from '../../context/Auth'
function Dash() {
  const [auth]=useAuth()
  return (
    <Layout title={"Dashboard - Ecommerce APP"}>
      <div className="container-fluid m-3 p-33">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>User Name : {auth?.user?.name}</h3>
              <h3>User Email : {auth?.user?.email}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dash
    

