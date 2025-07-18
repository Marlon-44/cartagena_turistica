import { createContext, useState } from "react";

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {

    const [services, setServices] = useState([
        { id: 1, name: "Islas y Clubes de Playa", info: "+15 islas and Clubes.", url__image: "assets/service__iland.jpg", category: "ISLA"},
        { id: 2, name: "Embaraciones", info: "Yates, Cenas Romanticas y Mas.", url__image: "assets/service__yatch.jpg", category: "EMBARCACION"},
        { id: 3, name: "Tours", info: "Cartagena, Barranquilla, Santa Marta.", url__image: "assets/service__citytour.png", category: "TOUR" }
    ])

    return (
        <ServiceContext.Provider value={{ services, setServices }}>
            {children}
        </ServiceContext.Provider>
    )
}