import React , {useState} from 'react'
import classes from "./product.module.css"
import {useDispatch} from "react-redux"
import { loadDeleteProduct, loadPopup } from '../../store/actions/actions'
import { Link, useNavigate } from 'react-router-dom'
import Popup from '../popup/Popup'

const Product = ({data}) => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleDelete = (id) =>{
    dispatch(loadDeleteProduct(id))
  }

  const text = data.body_html;

  return (
    <>
    <div key={data.id} className={classes.procuct_component} >
      <a onClick={() => {navigate(`/product/${data.id}`,{state:data})}} >
    <span className={classes.qty} >{data.variants[0].inventory_quantity }</span>
        <img src={data.image.src} alt='' />
        <h4 className={classes.title} >{data.title}</h4>
        {/* <p className={classes.description}  > {showMore ? text  : `${text.substring(0, 70)}...`} </p> */}
        <p className={classes.price_inventory} >{data.variants[0].price} <sup style={{textDecoration:"line-through"}} > {data.variants[0].compare_at_price}</sup>  </p>
      </a>
      <button className={classes.btns} onClick={() => {dispatch(loadPopup())}} >Delete</button>
        </div>
        <Popup>
          <div className={classes.Popup} >
            <h2>Are you sure wanted to delete this product ?</h2>
            <button className={classes.btns} onClick={() => {handleDelete(data.id)}} >Delete</button>
          </div>
        </Popup>
    </>
  )
}

export default Product