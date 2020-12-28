import React,{useState} from "react";

export const DataContext=React.createContext(null);

const DataContextProvider=props=>{
const[data,setData]=useState({"location":{
    "lat":"37.38605",
    "lng":"-122.08385"
}});

return(
    <DataContext.Provider value={{data,setData}} >
    {props.children}
    </DataContext.Provider>
)
}

export default DataContextProvider;