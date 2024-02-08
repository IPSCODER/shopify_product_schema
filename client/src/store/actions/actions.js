import * as types from "./actionType"
import axios from "axios"

const getData =(products) =>({
    type:types.GETPRODUCTS,
    payload:products
})

const deleteProduct = () =>({
    type:types.DELETE_PRODUCT
})


const addProduct = () => ({
    type:types.ADD_PRODUCT
})


const searchData = (searchData) =>({
    type:types.SEARCH,
    payload:searchData
})

const popup = () =>({
    type:types.POPUP
})

const vendor = (vendor) =>({
    type:types.VENDOR,
    payload:vendor
})

const updateProduct = () =>({
    type:types.UPDATE_PRODDUCT
})

const getcurrency = (currency) =>({
    type:types.GET_CURRENCY,
    payload:currency
})

const getDomain = (domain) =>({
    type:types.GET_DOMAIN,
    payload:domain
})


/*----------------------------------------*/



export const loadProductList = () => {
    return function(dispatch){
        axios.get("https://server-vo2k.onrender.com/").then((resp) => {
            dispatch(getData(resp.data))
            dispatch(loadGetCurrency())
        }).catch(err => console.log(err))
    }
}

export const loadDeleteProduct = (id) =>{
    console.log(id);
    return function(dispatch){
        axios.delete(`https://server-vo2k.onrender.com/${id}`).then((resp) =>{
            dispatch(deleteProduct())
            dispatch(loadProductList())
        }).catch((err) => console.log(err))
    }
}

export const loadAddProduct = (productData) =>{
    console.log("loadAddProduct");
    return function(dispatch){
        axios.post(`https://server-vo2k.onrender.com/post`,{body:productData}).then((resp)=>{
            dispatch(addProduct())
            dispatch(loadProductList())
        }).catch((err) => console.log(err))
    }
}


export const loadSearchData = (input) =>{
    return function(dispatch){
        dispatch(searchData(input))
    }
}


export const loadPopup =() =>{
    return function(dispatch){
        dispatch(popup())
    }
}


export const loadUpdateProduct = (id,data) =>{
    return function(dispatch){
        axios.put(`https://server-vo2k.onrender.com/put/${id}`,{data:data}).then((resp)=>{
            dispatch(updateProduct())
            dispatch(loadProductList())
        })
    }
}

export const loadGetCurrency = () =>{
    return function(dispatch){
        axios.get('https://server-vo2k.onrender.com/currency').then(resp=>{
            dispatch(getcurrency(resp.data.currency))
            dispatch(vendor(resp.data.name))
            dispatch(getDomain(resp.data.domain))
        })
    }
}
