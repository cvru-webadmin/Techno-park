import React, { useState } from 'react'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../../../Firebase";

const auth = getAuth(app);

export default function EmailAuthfication() {

    let[user,setuser]=useState({
        Email:"",
        password:""
    })

    const createuser=()=>{
        createUserWithEmailAndPassword(
            auth,
            user.Email,
            user.password
        ).then((value)=>console.log(value));
    }
  return (
    <div className='h-96 flex flex-col items-center'>
    <div>EmailAuthfication</div>
    <div className='flex flex-col gap-10 my-5'>
        <input className='border border-gray-500' onChange={(e)=>setuser({...user,Email:e.target.value})} value={user.Email} type="email" />
        <input className='border border-gray-500' onChange={(e)=>setuser({...user,password:e.target.value})} value={user.password} type="password" />
    </div>
    <button onClick={createuser} className='border-2 border-gray-800'>create account</button>
    </div>
  )
}
