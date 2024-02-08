import React from 'react'
import classes from "./home.module.css"
import {useSelector} from "react-redux"
import Product from '../../components/product-component/Product'
import Headbar from '../../components/headbar/Headbar'

const Home = () => {

  const data = useSelector(state => state.productReducer.products)
  const sdata = useSelector(state => state.productReducer.searchData)


  const searchFilter = data.filter((i)=> i.title.toLowerCase().includes(sdata.toLowerCase()) )


  return (
    <>
    <Headbar searchBar={true} />
    <main className={classes.productlist}>
    {searchFilter.map((i)=>(
      <Product data={i} key={i.id} />
    ))}
    </main>
    </>
  )
}

export default Home