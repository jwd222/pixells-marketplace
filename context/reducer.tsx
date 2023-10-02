import { Action } from "./actions"
import { AppState } from "./appcontext"

const reducer = (state: AppState, action: Action): AppState => {
    if (action.type === "CONNECT_WALLET") {
        return {
            ...state,
            wallet: true,
        }
    }
    if (action.type === "SET_SELECTED_CARDS") {
        return {
            ...state,
            selectedCards: action.payload,
        }
    }
    throw new Error(`no such action: ${action}`)
}
export default reducer
