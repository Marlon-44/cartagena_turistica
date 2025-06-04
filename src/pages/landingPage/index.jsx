import { useEffect } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionTitle from "../../components/SectionTitle";
import ServiceSection from "../../components/ServiceSection";
import styles from "./index.module.css"
import PlanSection from "../../components/PlanSection";
const Home = () =>{

    return (
        <div className={styles.body__page}>
            <Header/>
            <Banner/>
            <SectionTitle sectionName="Our Services And Destinations"/>
            <ServiceSection/>
            <SectionTitle sectionName="Our Ilands and club Beaches Plans"/>
            <PlanSection/>
        </div>

    )
}

export default Home;