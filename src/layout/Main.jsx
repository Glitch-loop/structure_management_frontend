import React from 'react';
import Header from '../components/Header';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <>
            <Header name="Boccho"/>
            <div className="w-5/6 h-auto mx-auto rounded-xl bg-pink">
                ola
                <Outlet/>
            </div>
        </>
    );
}

export default Main;