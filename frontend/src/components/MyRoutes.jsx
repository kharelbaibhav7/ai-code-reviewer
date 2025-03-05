import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';


const MyRoutes = () => {
    return (
        <div>
            <Routes>

                <Route index element={<HomePage></HomePage>}></Route>

            </Routes>
        </div>
    )
}

export default MyRoutes