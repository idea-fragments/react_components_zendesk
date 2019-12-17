// @flow

import { type Context, createContext, useContext } from "react"

export let storesContext :Context

export const setStoresContext = <StoresT>(s :StoresT) => {
    storesContext = createContext<StoresT>(s)
}

export const useStores = <StoresT>() :StoresT => {
    return useContext<StoresT>(storesContext)
}
