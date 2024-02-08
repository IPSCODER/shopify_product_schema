import React, { useEffect, useState } from 'react'
import classes from "./login.module.css"


const Login = () => {

    const [message,setMessage] = useState(false)

    const [loginDetails,setLoginDetails] = useState({
        shopName:'',  
        apiKey:'',
        password:''
    })


    useEffect(() => {
        var x = setTimeout(() => {
            setMessage(false)
        },1000)
        return () => {
            clearTimeout(x)
        }
    },[message])

    const changeHandler = (e) =>{
        const {name,value} = e.target;
        setLoginDetails({...loginDetails,[name]:value})
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        localStorage.setItem("shopname",loginDetails.shopName)
        localStorage.setItem("apikey",loginDetails.apiKey)
        localStorage.setItem("password",loginDetails.password)

    }


  return (
    <>
    {!localStorage.getItem("shopname") && !localStorage.getItem("apikey")  && !localStorage.getItem("password") && <main className={classes.login} >
        <div className={classes.container} >
            <form onSubmit={submitHandler} >
                <label>Shop Name</label>
                <input type='text' placeholder='Enter Shop Name' name='shopName' value={loginDetails.shopName} onChange={changeHandler} />
                <label>Api key</label>
                <input type='text' placeholder='Enter Api Key' name='apiKey' value={loginDetails.apiKey} onChange={changeHandler} />
                <label>Password</label>
                <input type='password' placeholder='Enter Password' name='password' value={loginDetails.password} onChange={changeHandler} />
                <button type='submit' >Submit</button>
            </form>
            <div className={classes.demo} >
                {message && <span className={classes.message} >Copied</span>}
                <h1>FOR DEMO</h1>
                <h2>SHOP NAME</h2>
                <h5 onClick={() => { navigator.clipboard.writeText(`Test-Schema0015`); setMessage(true); }} >Test-Schema0015 <svg width="64px" height="64px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M589.3 260.9v30H371.4v-30H268.9v513h117.2v-304l109.7-99.1h202.1V260.9z" fill="#E1F0FF"></path><path d="M516.1 371.1l-122.9 99.8v346.8h370.4V371.1z" fill="#E1F0FF"></path><path d="M752.7 370.8h21.8v435.8h-21.8z" fill="#446EB1"></path><path d="M495.8 370.8h277.3v21.8H495.8z" fill="#446EB1"></path><path d="M495.8 370.8h21.8v124.3h-21.8z" fill="#446EB1"></path><path d="M397.7 488.7l-15.4-15.4 113.5-102.5 15.4 15.4z" fill="#446EB1"></path><path d="M382.3 473.3h135.3v21.8H382.3z" fill="#446EB1"></path><path d="M382.3 479.7h21.8v348.6h-21.8zM404.1 806.6h370.4v21.8H404.1z" fill="#446EB1"></path><path d="M447.7 545.1h261.5v21.8H447.7zM447.7 610.5h261.5v21.8H447.7zM447.7 675.8h261.5v21.8H447.7z" fill="#6D9EE8"></path><path d="M251.6 763h130.7v21.8H251.6z" fill="#446EB1"></path><path d="M251.6 240.1h21.8v544.7h-21.8zM687.3 240.1h21.8v130.7h-21.8zM273.4 240.1h108.9v21.8H273.4z" fill="#446EB1"></path><path d="M578.4 240.1h130.7v21.8H578.4zM360.5 196.5h21.8v108.9h-21.8zM382.3 283.7h196.1v21.8H382.3zM534.8 196.5h65.4v21.8h-65.4z" fill="#446EB1"></path><path d="M360.5 196.5h65.4v21.8h-65.4zM404.1 174.7h152.5v21.8H404.1zM578.4 196.5h21.8v108.9h-21.8z" fill="#446EB1"></path></g></svg> </h5>
                <h2>API KEY</h2>
                <h5 onClick={() => { navigator.clipboard.writeText(`2e4a60ff336d70c9ecf2c675221a7420`); setMessage(true); }} >2e4a60ff336d70c9ecf2c675221a7420 <svg width="64px" height="64px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M589.3 260.9v30H371.4v-30H268.9v513h117.2v-304l109.7-99.1h202.1V260.9z" fill="#E1F0FF"></path><path d="M516.1 371.1l-122.9 99.8v346.8h370.4V371.1z" fill="#E1F0FF"></path><path d="M752.7 370.8h21.8v435.8h-21.8z" fill="#446EB1"></path><path d="M495.8 370.8h277.3v21.8H495.8z" fill="#446EB1"></path><path d="M495.8 370.8h21.8v124.3h-21.8z" fill="#446EB1"></path><path d="M397.7 488.7l-15.4-15.4 113.5-102.5 15.4 15.4z" fill="#446EB1"></path><path d="M382.3 473.3h135.3v21.8H382.3z" fill="#446EB1"></path><path d="M382.3 479.7h21.8v348.6h-21.8zM404.1 806.6h370.4v21.8H404.1z" fill="#446EB1"></path><path d="M447.7 545.1h261.5v21.8H447.7zM447.7 610.5h261.5v21.8H447.7zM447.7 675.8h261.5v21.8H447.7z" fill="#6D9EE8"></path><path d="M251.6 763h130.7v21.8H251.6z" fill="#446EB1"></path><path d="M251.6 240.1h21.8v544.7h-21.8zM687.3 240.1h21.8v130.7h-21.8zM273.4 240.1h108.9v21.8H273.4z" fill="#446EB1"></path><path d="M578.4 240.1h130.7v21.8H578.4zM360.5 196.5h21.8v108.9h-21.8zM382.3 283.7h196.1v21.8H382.3zM534.8 196.5h65.4v21.8h-65.4z" fill="#446EB1"></path><path d="M360.5 196.5h65.4v21.8h-65.4zM404.1 174.7h152.5v21.8H404.1zM578.4 196.5h21.8v108.9h-21.8z" fill="#446EB1"></path></g></svg></h5>
                <h2>PASSWORD</h2>
                <h5 onClick={() => { navigator.clipboard.writeText(`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`); setMessage(true); }} >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 <svg width="64px" height="64px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M589.3 260.9v30H371.4v-30H268.9v513h117.2v-304l109.7-99.1h202.1V260.9z" fill="#E1F0FF"></path><path d="M516.1 371.1l-122.9 99.8v346.8h370.4V371.1z" fill="#E1F0FF"></path><path d="M752.7 370.8h21.8v435.8h-21.8z" fill="#446EB1"></path><path d="M495.8 370.8h277.3v21.8H495.8z" fill="#446EB1"></path><path d="M495.8 370.8h21.8v124.3h-21.8z" fill="#446EB1"></path><path d="M397.7 488.7l-15.4-15.4 113.5-102.5 15.4 15.4z" fill="#446EB1"></path><path d="M382.3 473.3h135.3v21.8H382.3z" fill="#446EB1"></path><path d="M382.3 479.7h21.8v348.6h-21.8zM404.1 806.6h370.4v21.8H404.1z" fill="#446EB1"></path><path d="M447.7 545.1h261.5v21.8H447.7zM447.7 610.5h261.5v21.8H447.7zM447.7 675.8h261.5v21.8H447.7z" fill="#6D9EE8"></path><path d="M251.6 763h130.7v21.8H251.6z" fill="#446EB1"></path><path d="M251.6 240.1h21.8v544.7h-21.8zM687.3 240.1h21.8v130.7h-21.8zM273.4 240.1h108.9v21.8H273.4z" fill="#446EB1"></path><path d="M578.4 240.1h130.7v21.8H578.4zM360.5 196.5h21.8v108.9h-21.8zM382.3 283.7h196.1v21.8H382.3zM534.8 196.5h65.4v21.8h-65.4z" fill="#446EB1"></path><path d="M360.5 196.5h65.4v21.8h-65.4zM404.1 174.7h152.5v21.8H404.1zM578.4 196.5h21.8v108.9h-21.8z" fill="#446EB1"></path></g></svg> </h5>
            </div>
        </div>
    </main> }
    </>
  )
}

export default Login