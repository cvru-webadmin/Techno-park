import { createContext, useState } from "react";

export const ScrollContext= createContext();
export const ScrollProvider=({children})=>{
const [dropDown,setDropDown]=useState("")
    return(
        <ScrollContext.Provider value={{dropDown,setDropDown}}>
            {children}
        </ScrollContext.Provider>
    )
}