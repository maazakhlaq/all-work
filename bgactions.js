import { CHANGE_BG,RESET_BG } from "./bgactiontype";
let changeBg=()=>({
    type:CHANGE_BG
          
});

let restBg=()=>{
    return {type:RESET_BG,
        payload:'reset background'
    }
}

export {changeBg,restBg};