import { createContext, useState } from "react";

export const ExampleContext= createContext();
export const ExampleProvider=({children})=>{
const[about,setAbout]=useState("")
    return(
        <ExampleContext.Provider value={{about,setAbout}}>
            {children}
        </ExampleContext.Provider>
    )
}