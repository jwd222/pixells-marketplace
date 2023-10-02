export type Action =
    | { type: "CONNECT_WALLET" }
    | { type: "SET_SELECTED_CARDS"; payload: number[] }
