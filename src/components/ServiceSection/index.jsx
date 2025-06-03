import { useContext } from "react";
import ServiceCard from "../ServiceCard";
import styles from "./Service.modules.css"
import { ServiceContext } from "../../Context/servicesContext";

const ServiceSection =()=>{
    const {services} = useContext(ServiceContext)
    return(
        <section>
            
            {
                services.map(()=>{
                    <ServiceCard nombre={services.nombre}/>
                })
            }
            <ServiceCard/>
        </section>
    )
}

export default ServiceSection;