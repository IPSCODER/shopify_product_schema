import React from 'react'
import {Outlet} from "react-router-dom"
import classes from "./theme.module.css"
import Sidebar from '../components/sidebar/Sidebar'

const Theme = () => {
  return (
    <>
    <Sidebar/>
    <div className={classes.outlet} >
    <Outlet/>
    </div>
    </>
  )
}

export default Theme