import React, { useEffect, useState } from 'react'
import classes from "./themeChanger.module.css"

const ThemeChanger = () => {

    const [theme,setTheme] = useState('lightTheme');
    const [themeBtn,setThemeBtn] = useState(false);

    const toggleTheme = () => {
      if (theme === 'darkTheme') {
        setTheme("lightTheme")
      }else{
        setTheme("darkTheme")
      }
      setThemeBtn(prev => !prev)
    }
  
    useEffect(() => {
      document.body.className = theme;
    },[theme])

  return (
    <div onClick={toggleTheme} className={classes[themeBtn ? 'themeSwitchopen' : 'themeSwitch']} > <span className='open' ></span> </div>
  )
}

export default ThemeChanger