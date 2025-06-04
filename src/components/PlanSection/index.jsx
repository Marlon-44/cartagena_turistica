import { useState } from "react";
import PlanCard from "../PlanCard";
import styles from "./planSection.module.css"

const PlanSection = ({})=>{
    const [visibleCount, setVisibleCount] = useState(6);

    const seeMore =()=>{
        setVisibleCount((prev)=> prev+3);
    };

    return(
        <section className={styles.plan__section}>
            <PlanCard/>
            <PlanCard/>
            <PlanCard/>
            <PlanCard/>
            <PlanCard/>
            <PlanCard/>
        </section>
    )
}

export default PlanSection;