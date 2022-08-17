import { ADD_TO_CART } from "../Constant"
import { REMOVE_TO_CART } from "../Constant"
const initialState={
    cardData:[]
}
export default function cardItmes(state=initialState,action)
{
switch(action.type)
{
    case ADD_TO_CART:
        return {
            ...state,
            cardData:action.data
        }
      
    case REMOVE_TO_CART:
        return {
            ...state,
            cardData:action.data
        }
        
    default:
        return state
}
}