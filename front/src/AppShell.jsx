import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import {Routes, Route} from "react-router-dom";

const Whole = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const AppHeader = styled.header`
    width: 100%;
`;

const AppMain =  styled.main`
    width: 1350px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const AppFooter = styled.footer`
    width: 100%;
`;
 
const AppShell = () => {
    return(
        <Whole>
            <AppHeader><Header/></AppHeader>

            <AppMain>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/login" element={<Login />}></Route>                               
                </Routes>
            </AppMain>

            <AppFooter></AppFooter>
        </Whole>
    )
}

export default AppShell;