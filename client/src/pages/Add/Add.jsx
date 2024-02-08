import React, { useEffect, useState } from 'react'
import classes from "./add.module.css"
import {useDispatch, useSelector} from "react-redux"
import { loadAddProduct, loadGetSingleProduct, loadUpdateProduct } from '../../store/actions/actions'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Headbar from '../../components/headbar/Headbar'

const Add = ({add}) => {
  const dispatch = useDispatch();
  const {state} = useLocation();
  const navigate = useNavigate();
  const [validation,setValidation] = useState(false);
  const vendor = useSelector((state) => state.productReducer.vendor)
  const currency = useSelector((state) => state.productReducer.currency)
  const domain = useSelector((state) => state.productReducer.domain)
  


  const {id} = useParams();
  const [productData,setProductData] = useState({
    description:'',
    handle:'',
    images:'',
    productType:'',
    status:'active',
    tags:'',
    title:'',
    varients:'',
    price:'',
    priceCompare:'',
    qty:''
  });


  useEffect(()=>{
    if (state && id ) {
      setProductData({...state})
    }else{
      setProductData({
        description:'',
        handle:'',
        images:'',
        title:'',
        price:'',
        priceCompare:'',
        qty:''
      })
    }
  },[state])

  const onChangeHandler = (e) =>{
    const {name,value} = e.target;
    setProductData({...productData,[name]:value})
    setValidation(false)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!productData.description == "" && !productData.handle == "" && !productData.images == "" && productData.images.startsWith("https://") && productData.images.length > 20 && !productData.price == "" && !productData.priceCompare == "" && !productData.qty == "" && !productData.title == "" ) {      
      if (!id) {
        dispatch(loadAddProduct(productData))
      }else{
        dispatch(loadUpdateProduct(id,productData))
      }
      navigate("/")
    }else{
      setValidation(true)
    }






  }

  const jsonLd ={
    "@context": "http://schema.org/",
      "@type": "Product",
      "name": productData.title,
      "url": domain+"\/products\/"+productData.handle.toLowerCase(),
      "image": [
          productData.images.toLowerCase()
        ],
      "description": productData.description,
      "brand": {
        "@type": "Brand",
        "name": vendor
      },
      "offers": [{
            "@type" : "Offer","availability" : `http://schema.org/${productData.qty > 0 ? "InStock" : "OutOfStock"}` ,
            "price" : productData.price,
            "priceCurrency" : currency,
            "url" : domain+"\/products\/"+productData.handle
          }
]
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonLd));
  };






  return (
    <>
    <Headbar searchBar={false} />
    <section className={classes.add} >
      <form onSubmit={submitHandler} className={classes[validation ? 'err' : ""]} >
      <div className={classes.input_section} >
        <label> Enter valid Title </label>
        <input type="text" name='title' value={productData.title} onChange={onChangeHandler} />
        </div>
        <div className={classes.input_section} >
        <label> Enter valid Description </label>
        <input type="text" name='description' value={productData.description} onChange={onChangeHandler}  />
        </div>
        <div className={classes.input_section} >
        <label> Enter valid Product Url </label>
        <input type="text" name='handle' value={productData.handle} onChange={onChangeHandler} />
        </div>
        <div className={classes.input_section} >
        <label> Enter valid Image Url </label>
        <input type="text" name='images' value={productData.images} onChange={onChangeHandler} />
        </div>
        <div className={classes.input_section} >
        <label> Enter valid Price </label>
        <input type="number" name='price' value={productData.price} onChange={onChangeHandler} />
        </div>
        <div className={classes.input_section} >
        <label> Enter valid Price Comapare </label>
        <input type="number" name='priceCompare'  value={productData.priceCompare} onChange={onChangeHandler} />
        </div>
        <div className={classes.input_section} >
        <label> Enter valid Quantity </label>
        <input type="number" name='qty' value={productData.qty} onChange={onChangeHandler} />
        </div>
        <button className={classes.submit} type='submit' >{id ? "UPDATE" : "ADD" }</button>
        {validation && <p style={{color:"red",fontSize:'16px',fontWeight:'bold',textTransform:'uppercase',}} >Fill (*) all Field with valid information </p>}
      </form> 

      <div className={classes.jsonFormate} >
      <button className={classes.copyClipboard}  onClick={copyToClipboard} >Copy Clipboard</button>
      <pre>{JSON.stringify(jsonLd, null, 2)}</pre>
      </div>

    </section>
    </>
  )
}

export default Add