import React from 'react'
import { useEffect,useState } from 'react'
import { useAuth } from '../../context/Auth'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Spiner from '../Spiner'
export default function PrivateRoute (){
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()

    useEffect(()=>{
        const authCheks =async()=>{
            const res= await axios.get('http://localhost:8000/api/v1/auth/user-auth' )
        if (res.data.ok){
            setOk(true)
        }
        else{
            setOk(false)
        }
        }
        if(auth.token) authCheks()
    },[auth?.token])
    return ok ? <Outlet/> :<Spiner/>
}
