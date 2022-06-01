import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Outlet,Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register'
import Login from './pages/Login'
import axios from 'axios'
import Header from './components/Header';
import About from './pages/About'

axios.defaults.baseURL=process.env.REACT_APP_BASE_API_URL

ReactDOM.render(
  <BrowserRouter>
    <Header />
        <Routes>

          <Route path='/' element={<App/>}> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>

        </Route>
        </Routes>
      </BrowserRouter>,
      document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


