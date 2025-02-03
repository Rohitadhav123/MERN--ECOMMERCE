import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import Spiner from '../Spiner'
export default function AdminRoute (){
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()

    useEffect(()=>{
        const authCheks =async()=>{
            const res= await axios.get('http://localhost:8000/api/v1/auth/admin-auth' )
        if (res.data.ok){
            setOk(true)
        }
        else{
            setOk(false)
        }
        }
        if(auth.token) authCheks()
    },[auth?.token])
    return ok ? <Outlet/> :<Spiner path=''/>
}
