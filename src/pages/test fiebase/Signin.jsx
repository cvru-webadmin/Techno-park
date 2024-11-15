import React, { useState } from 'react'
import { app } from '../../../Firebase';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import EmailAuthfication from './EmailAuthfication';

const auth=getAuth(app);

export default function Signin() {

    let[user,setuser]=useState({
        Email:"",
        password:""
    })

    function Sginin(){
        console.log("method")
        signInWithEmailAndPassword(
            auth,
            user.Email,
            user.password
        ).then((value)=>console.log(value))
        .catch((err)=>console.log(err))
    }

    function reset(){
        setuser(
            {
                Email:"",
                password:""
            }
        )
    }
    
  return (
    
    <div className='h-[80dvh] flex flex-col items-center justify-evenly'>
    <EmailAuthfication />
    <div>Sign In</div>
    <div className='flex flex-col gap-10 my-5'>
        <input className='border border-gray-500' onChange={(e)=>setuser({...user,Email:e.target.value})} value={user.Email} type="email" />
        <input className='border border-gray-500' onChange={(e)=>setuser({...user,password:e.target.value})} value={user.password} type="password" />
    </div>
    <div className='flex gap-5'>
    <button type='submit' onClick={()=>Sginin()} className='border-2 border-gray-800'>sign in account</button>
    <button type="reset" onClick={reset} className='border-2 border-gray-800'>reset</button>
    </div>
    </div>
   
  )
}
