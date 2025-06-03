import { createContext, useState } from "react";

export const ServiceContext  = createContext();

export const ServiceProvider = ({children}) =>{

    const [services, setServices] = useState([
        {id:1,name: "Ilands",color: "#6BD1FF"},
        {id:2,name: "Yatches", color: "#00C86F"},
        {id:3,name: "City Tours", color: "#FFBA05"}
    ])

    return(
        <ServiceContext.Provider value={{services, setServices}}>
            {children}
        </ServiceContext.Provider>
    )
}