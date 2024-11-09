import React from 'react'
import SideBar from './AdminSideBar'

export default function AuthLayout({children}) {
  return <>
    <SideBar></SideBar>
    {children}
     </>
}