import React, { useEffect } from 'react';
import classes from "./view.module.css"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Headbar from '../../components/headbar/Headbar';

const View = () => {
  const {id} = useParams()
  const {state} = useLocation()
  const currency = useSelector((state) => state.productReducer.currency)
  const domain = useSelector((state) => state.productReducer.domain)
  const vendor = useSelector((state) => state.productReducer.vendor)
  const navigate = useNavigate()
  console.log(state);

  const datas = {
    description:state.body_html,
    handle:state.handle,
    images:state.image.src,
    productType:state.product_type,
    status:state.status,
    tags:state.tags,
    title:state.title,
    varients:state.variants[0].title,
    price:state.variants[0].price,
    priceCompare:state.variants[0].compare_at_price,
    qty:state.variants[0].inventory_quantity,
    vendor:state.vendor
  }


  
  

  const jsonLd ={
    "@context": "http://schema.org/",
      "@type": "Product",
      "name": state.title,
      "url": domain+"\/products\/"+state.handle,
      "image": [
          state.image.src
        ],
      "description": state.body_html,
      
      "brand": {
        "@type": "Brand",
        "name": vendor
      },
      "offers": [{
            "@type" : "Offer","availability" : `http://schema.org/${state.variants[0].inventory_quantity > 0 ? "InStock" : "OutOfStock"}` ,
            "price" : state.variants[0].price,
            "priceCurrency" : currency,
            "url" : domain+"\/products\/"+state.handle
          }
]
  }


  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonLd));
  };
  
    



  return (
    <>
    <Headbar searchBar={false} />
    <main className={classes.view} >
        <div className={classes.imglist}>
        {state.images?.map((i) => (
          <img key={i.id} src={i.src} />
        ))}
        </div>
        <div className={classes.jsondata} >
        <pre>{JSON.stringify(jsonLd, null, 2)}</pre>
        <div className={classes.btns} >
          <button onClick={copyToClipboard} >Copy Clipboard</button>
          <button onClick={() =>{navigate(`/edit/${id}`,{state:datas})} }  >Edit Product</button>
        </div>
        </div>
    </main>
    </>
  )
}

export default View