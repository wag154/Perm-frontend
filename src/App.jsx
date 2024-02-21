import React, {useEffect, useState} from 'react';
import { NavBar } from './layout';
import { Login, Home , Permission ,NotFound } from './page';
import { useAccount } from './context';
import {Routes, Route} from 'react-router-dom'
function App() {
  const {accountDetails, setAccountDetails} =  useAccount()

  const [loggedIn , setLoggedIn] = useState(()=>{

    const saved = localStorage.getItem("loggedin");
    const initialValue = JSON.parse(saved);

    return initialValue || "";
  })
  useEffect(()=>{console.log("here",loggedIn)},[])
  return (
 <>

  <Routes>

    <Route path = "/Login" element = {<Login />}/>

    <Route path = "/" element = {<NavBar/>}>
    
      <Route index element = {< Home />} />
    </Route>
    {loggedIn ?
      (<Route path = "/perm" element ={<Permission />} />)
      :
      null
    }
    <Route path = "*" element={<NotFound />} />
  </Routes>
 </>
  );
}

export default App;
