import React from 'react'
import AdminMenu from '../../component/layout/AdminMenu'
import Layout from '../../component/layout/layout'

function User() {
  return (
    <Layout title={'Dashboard - All Users '}>
         <div className="container-fluid m-3 p-3">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9"> <h1>User </h1></div>
        </div>
        </div>
    </Layout>
  )
}

export default User
