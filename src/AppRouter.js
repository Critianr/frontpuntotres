import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Signin from './signin/Signin';
import { Home } from './pages/Pages';

export default function AppRouter() {
    return (
        
        <Routes>
            
            {/* <Switch> */}
            {/* <Fragment>  */}

            <Route  path={"/"} element={<Signin />} />
            <Route path={"/index"} element={<Home />} />
        </Routes>
        
        )
}