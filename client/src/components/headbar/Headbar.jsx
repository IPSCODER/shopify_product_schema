import React, { useEffect, useState } from 'react'
import classes from "./headbar.module.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadSearchData } from '../../store/actions/actions'

const Headbar = ({searchBar}) => {

  const [search,setSearch] = useState("")


  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadSearchData(search))
  },[search])




  return (
    <header className={classes.header}>
        <Link to={"/"} ><h1>Schema Markup Generator (JSON-LD)</h1></Link>
        {searchBar && <input className={classes.searchBar} type='text' placeholder='search' value={search} onChange={(e)=>{setSearch(e.target.value)}}  /> }
    </header>
  )
}

export default Headbar