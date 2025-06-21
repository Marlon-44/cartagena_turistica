import { useContext } from "react";
import ServiceCard from "../ServiceCard";
import styles from "./serviceSection.module.css"
import { ServiceContext } from "../../Context/servicesContext";

const ServiceSection =()=>{
    const {services} = useContext(ServiceContext)
    
    return(
        
        <section className={styles.service__section}>
            
            {
                services.map((service)=>(
                    <ServiceCard key={service.id} nombre={service.name} info={service.info} reference={service.url__image} category={service.category}/>
                ))
            }
            
        </section>
    )
}

export default ServiceSection;