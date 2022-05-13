import { CHANGE_BG,RESET_BG } from "./bgactiontype";
export const BG_KEY='bgStore'
let initialState={
    color:'#' + Math.random().toString(16).slice(2,8)
}
let bgReduce=(state=initialState,action)=>{

    let {type, payload}=action
    switch(type){
        case CHANGE_BG:
            return{
                color:'#' + Math.random().toString(16).slice(2,8)
            } 
            case RESET_BG:
                return {
                    color:'#' + Math.random().toString(16).slice(2,8)
                } 
                default :return state 

}}
export{ bgReduce};