import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbare from './Navbare';

const Main = () => {
    return (
        <div>
            <Navbare/>
            <Outlet/>
        </div>
    );
};

export default Main;