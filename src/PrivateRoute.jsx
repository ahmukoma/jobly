import React, { useContext } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import UserContext from "./auth/UserContext";
import JoblyApi from "./api";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

function PrivateRoute() {

  //const { currentUser } = useContext(UserContext);
  const { token } = JoblyApi.getCurrentUser();


	//write a debug statement
  console.debug(
  );

//return a route using the parameters passed in the function
  return (
    token || false ? <Outlet/> : <Navigate to='/login' />
  );
}

export default PrivateRoute;