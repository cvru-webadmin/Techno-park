import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './componet/Navigation';

export default function Admin() {
  return (
    <>
    <div className='flex'>
      <AdminSidebar />
      <Outlet />
    </div>
    {/* <button className='bg-red-500 text-white px-3 py-2 rounded-md capitalize font-semibold' onClick={LogoutAdmin}>logout admin</button> */}
    </>
  )
}
