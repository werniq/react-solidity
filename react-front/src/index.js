import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Web3ReactProvider } from "@web3-react/core";
import { MetamaskProvider } from "./components/hooks/ConnectHook"; 
import Web3 from "web3";
import Metamask from "./components/Metamask";
import NavbarWe from "./components/Navbar"

function getLibrary(provider, connector) {
    return new Web3(provider);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <NavbarWe>
        <Web3ReactProvider getLibrary={getLibrary}>
            <MetamaskProvider>
                <Metamask />
            </MetamaskProvider>
        </Web3ReactProvider>
    </NavbarWe>
    <App />
    </>

);
