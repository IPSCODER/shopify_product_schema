import React from 'react'
import classes from "./popup.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { loadPopup } from '../../store/actions/actions'

const Popup = ({children}) => {

     const data = useSelector(state => state.productReducer.popup)

     const dispatch = useDispatch()


  return (
    <>
    {data && <div onClick={()=>{dispatch(loadPopup())}} className={classes.popupMessage} >
        {children}
        </div>}
    </>
  )
}

export default Popup