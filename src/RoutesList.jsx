import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Home from './Home';
import Profile from './Profile';
import Companies from './Companies';
import Jobs from './Jobs';
import PageNotFound from './404';
import PrivateRoute from "./PrivateRoute";
import UserContext from "./auth/UserContext";
import { useState } from "react";
import JoblyApi from "./api";
import CompanyDetails from "./CompanyDetails";

function RoutesList(){
  const [token, setToken] = useState(JoblyApi.getCurrentUser());

    return(
        <BrowserRouter>
        <UserContext.Provider value={[token, setToken]}>
          <Navbar />
        </UserContext.Provider>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/companies' element={<Companies/>}/>
            <Route path='/companydetails/:handle' element={<CompanyDetails/>}/>
            <Route path='/jobs' element={<Jobs/>}/>
          </Route>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login login={token} setToken={setToken}/>}/>
          <Route path='/signup' element={<Signup logIn={token} setLogIn={setToken} />}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default RoutesList;