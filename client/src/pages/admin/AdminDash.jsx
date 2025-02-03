import React from 'react'
import Layout from '../../component/layout/layout'
import AdminMenu from '../../component/layout/AdminMenu'
import { useAuth } from '../../context/Auth'
function AdminDash() {
  const [auth]=useAuth()
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu/>
          </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h3>Admin Name : {auth?.user?.name}</h3>
                <h4>Admin Email : {auth?.user?.email}</h4>
                <h4>Admin Contact : {auth?.user?.cotact}</h4>
              </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDash
