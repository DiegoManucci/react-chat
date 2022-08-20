import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';

function PrivateRoute({loggedIn, element}){
    return loggedIn ? element : <Navigate to={"/login"}/>;
}

export default PrivateRoute;