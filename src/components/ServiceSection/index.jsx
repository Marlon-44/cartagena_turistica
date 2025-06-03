import { useContext } from "react";
import ServiceCard from "../ServiceCard";
import { ServiceContext } from "../../Context/servicesContext";
import styles from "./serviceSection.module.css"

const ServiceSection =()=>{
    const {services} = useContext(ServiceContext)
    console.log("services: ", services); 
    return(
        
        <section className={styles.service__section}>
            
            {
                services.map((service)=>(
                    <ServiceCard key={service.id} nombre={service.name} info={service.info} reference={service.url__image}/>
                ))
            }
            
        </section>
    )
}

export default ServiceSection;