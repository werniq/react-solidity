import { InjectedConnector } from "@web3-react/injected-connector"

export const injected = new InjectedConnector({
    supportedChainIds: [1, 5, 42, 1337, 5777]
});