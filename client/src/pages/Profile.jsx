import React, { useEffect, useState } from 'react'
import Layout from '../component/layout/layout'

import UserMenu from '../component/layout/UserMenu'
import { useAuth } from '../context/Auth';
import toast from 'react-hot-toast';
import axios from 'axios';

function Profile() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [auth,setAuth]=useAuth()
    useEffect(()=>{
      
      const {name,email,phone,address,}=auth?.user
      setName(name)
      setEmail(email)
      setAddress(address)
      setPhone(phone)
    },[auth?.user])
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const {data} = await axios.put('http://localhost:8000/api/v1/auth/profile', { name, email, password, phone, address });
          if (data?.error) {
              toast.error(data?.error);
              navigate('/login');
          } else {
              setAuth({...auth,user:data?.updateUser})
              let ls=localStorage.getItem("auth")
              ls=JSON.parse(ls)
              ls.user=data.updateUser
              localStorage.setItem('auth',JSON.stringify(ls))
              toast.success("Profile Updated Successfully")
          }
      } catch (error) {
          console.log(error);
          toast.error("something went wrong");
      }
  };

  return (
    <Layout title={'Dashboard - All Create category '}>
    <div className="container-fluid m-3 p-3">
<div className="row">
 <div className="col-md-3">
     <UserMenu/>
 </div>
 <div className="col-md-9">
 <div className="form-container">
                <h2>USER PROFILE</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            placeholder="Enter Your Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="inputName"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={email}
                            placeholder="Enter Your Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="inputEmail"
                            
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={password}
                            placeholder="Enter Your Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="inputPassword"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={phone}
                            placeholder="Enter Phone no"
                            type="text"
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            id="inputPhone"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={address}
                            placeholder="Enter Your Address"
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="inputAddress"
                            
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                       UPDATE
                    </button>
                </form>
            </div>
 </div>
</div>
</div>
</Layout>
  )
}

export default Profile

