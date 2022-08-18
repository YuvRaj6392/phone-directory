import { ADD_TO_CART } from "../Constant"
import { REMOVE_TO_CART } from "../Constant"
export const addToCart=(data)=>{
    console.warn(data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const RemoveToCart=(data)=>{
    return {
        type:REMOVE_TO_CART,
        data:data
    }
}

