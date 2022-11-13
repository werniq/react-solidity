import { injected } from "../wallet/injected";
import { useWeb3React } from "@web3-react/core";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export const MetamaskContext = React.createContext(null)

export const MetamaskProvider = ({ children }) => {
    const { activate, account, library, connector, active, deactivate} = useWeb3React();

    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize Loading

    useEffect(() => {
        connect().then((val) => {
            setIsLoading(false)
        })
    }, [])


    const handleIsActive = useCallback(() => {
        console.log("App is connected to Metamask, ", active);
        setIsActive(true);
    }, [active])

    useEffect(() => {
        handleIsActive()
    }, [handleIsActive])

    // Connect to Metamask Wallet 
    const connect = async () => {
        console.log("Connecting to Metamask...")
        try {
            await activate(injected)
            setIsActive(true)
        } catch (e) {
            console.error("Error while connecting: ", e.message)
        }
    }


    // Disconnect from Metamask
    const disconnect = async () => {
        console.log("Disconnecting from Metamask...")
        try {
            await deactivate()
            setIsActive(false)
        } catch (e) {
            console.error("Error while disconnecting:", e.message)
        }
    }

    const values = useMemo(
        () => ({
            connect,
            disconnect,
            isActive,
            account,
            isLoading,
        }),
        [isActive, isLoading, account]
    )

    return <MetamaskContext.Provider value={values}>{children}</MetamaskContext.Provider>
}

export default function useMetamask() {
    const context = React.useContext(MetamaskContext)

    if (context === undefined) {
        throw new Error(
            "Use Metamask hook must be used with a MetamaskProvider component"
        )
    }

    return context;
}