import { createContext, useState } from "react";

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {

    const [services, setServices] = useState([
        { id: 1, name: "Ilands and Beach Clubes", info: "+15 ilands and Beach Clubes.", url__image: "assets/service__iland.jpg", category: "ISLA"},
        { id: 2, name: "Yatches", info: "Yatches, Romantic Dinners and More.", url__image: "assets/service__yatch.jpg", category: "EMBARCACION"},
        { id: 3, name: "City Tours", info: "Cartagena, Barranquilla, Santa Marta.", url__image: "assets/service__citytour.png", category: "TOUR" }
    ])

    return (
        <ServiceContext.Provider value={{ services, setServices }}>
            {children}
        </ServiceContext.Provider>
    )
}