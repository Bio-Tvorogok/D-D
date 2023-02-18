import React from 'react';
import Auth from './login/Auth';
import Header from './header/Header';
import HeaderMD from './header/HeaderMD';
import Map from './gamegrid/GameGrid';
// import Footer from './footer/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './error/ErrorPage';
import { getUserToken } from '@/general/SessionStorage';

const checkIsLoggined = () => {
    return !!getUserToken(false);
};

const App = () => {
    return (
        <>
            <Header></Header>
            <HeaderMD></HeaderMD>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Auth />}></Route>
                    <Route
                        path="/"
                        element={
                            checkIsLoggined() ? (
                                <Map cells={20} />
                            ) : (
                                <Navigate to="/login" replace />
                            )
                        }></Route>
                    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
