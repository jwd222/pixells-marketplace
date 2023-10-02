"use client"
import { createContext, useContext, useReducer, useState } from "react"
import reducer from "./reducer"
type AppContextType = {
    connectWallet: () => void
    handleCardSelect: (id: number) => void
} & AppState

/* use prettify to see nested types
type Prettify<T> = {
    [K in keyof T]: T[K]
} & {}

type _AppContextType = Prettify<AppContextType>
*/

type AppContextProviderProps = {
    children: React.ReactNode
}
export type AppState = {
    wallet: boolean
    selectedCards: number[]
}
const initialState: AppState = {
    wallet: false,
    selectedCards: [],
}

// Create the context
const AppContext = createContext<AppContextType | null>(null)

const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const connectWallet = () => {
        dispatch({ type: "CONNECT_WALLET" })
    }

    const handleCardSelect = (id: number) => {
        const { selectedCards } = state
        if (selectedCards.includes(id)) {
            const newCards = selectedCards.filter((cardId) => cardId !== id)
            dispatch({
                type: "SET_SELECTED_CARDS",
                payload: newCards,
            })
        } else {
            dispatch({
                type: "SET_SELECTED_CARDS",
                payload: [...selectedCards, id],
            })
        }
    }

    return (
        <AppContext.Provider
            value={{
                ...state,
                handleCardSelect,
                connectWallet,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error(
            "useAppContext must be used within a AppContextProvider"
        )
    }
    return context
}

export { AppContextProvider, useAppContext }
