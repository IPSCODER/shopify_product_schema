import './App.css';
import Home from './pages/Home/Home';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Theme from './scene/Theme';
import Add from './pages/Add/Add';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductList, loadStoreData } from './store/actions/actions';
import View from './pages/View/View';
import Setting from './pages/setting/Setting';
import Docs from './pages/document/Docs';

function App() {

  const dispatch = useDispatch();

  const data = useSelector(state => state.productReducer)
  console.log(data);
  
  useEffect(()=>{
    dispatch(loadProductList())
    // dispatch(loadVendor(data[0]?.vendor))
  },[])
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Theme/>} >
      <Route path='/'  element={<Home/>} />
      <Route path='/add'  element={<Add add='abcd'  />} />
      <Route path='/document'  element={<Docs/>} />
      <Route path='/product/:id'  element={<View/>} />
      <Route path='/edit/:id'  element={<Add/>} />
      <Route path='/setting'  element={<Setting/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
