import { useState } from "react";
import PlanCard from "../PlanCard";
import styles from "./planSection.module.css"
import { motion, AnimatePresence, styleEffect } from "framer-motion";

const planes = [
    {
        id: 1,
        url__image: "assets/plan1.jpg",
        name: "Islas del Rosario",
        place: "Cartagena",
        price: "$450.000",
    },
    {
        id: 2,
        url__image: "assets/plan__aviario.jpg",
        name: "Aviario Nacional",
        place: "Isla de Barú",
        price: "$600.000",
    },
    {
        id: 3,
        url__image: "assets/planes__tayrona.jpg",
        name: "Cabo San Juan - Tayrona",
        place: "Santa Marta",
        price: "$1.200.000",
    },
    {
        id: 4,
        url__image: "assets/planes__mambobeach.png",
        name: "Mambo Beach",
        place: "Isla de Barú",
        price: "$480.000",
    },
    {
        id: 5,
        url__image: "assets/planes__sibarita.jpg",
        name: "Yate Exclusivo",
        place: "Bahia de Cartagena",
        price: "$1.800.000",
    },
    {
        id: 6,
        url__image: "assets/planes__isladelencanto.png",
        name: "Isla del Encanto",
        place: "Isla de Barú",
        price: "$530.000",
    },
    {
        id: 7,
        url__image: "assets/planes__nenabeach.png",
        name: "Nena Beach",
        place: "Isla de Barú",
        price: "$1.000.000",
    },
    {
        id: 8,
        url__image: "assets/planes__boraboraarea.png",
        name: "Bora Bora Area Club",
        place: "Isla de Barú",
        price: "$400.000",
    },
    {
        id: 9,
        url__image: "assets/planes__boraboravip.png",
        name: "Escapada Romántica",
        place: "Islas del Rosario",
        price: "$750.000",
    },
    {
        id: 10,
        url__image: "assets/planes__tour5islas.png",
        name: "Tour 5 Islas",
        place: "Islas del Rosario",
        price: "$950.000",
    },
    {
        id: 11,
        url__image: "assets/planes__tour3islas.png",
        name: "Tour 3 Islas",
        place: "Islas del Rosario",
        price: "$670.000",
    },
    {
        id: 12,
        url__image: "assets/planes__paopao.jpg",
        name: "PAO PAO Hotel & Restaurant",
        place: "Cholón",
        price: "$520.000",
    },
];


const PlanesSection = () => {
    const INITIAL_COUNT = 6;
    const STEP = 3;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const handleToggle = () => {
        if (visibleCount >= planes.length) {
            setVisibleCount(INITIAL_COUNT);
        } else {
            setVisibleCount((prev) => Math.min(prev + STEP, planes.length));
        }
    };

    const isAllVisible = visibleCount >= planes.length;

    return (
        <section className={styles.plan__section__container}>
            
            <div className={styles.plan__section}>
                <AnimatePresence>
                    {planes.slice(0, visibleCount).map((plan) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.4 }}
                            className={styles.plan__card__container}
                        >
                            <PlanCard
                                url__image={plan.url__image}
                                name={plan.name}
                                place={plan.place}
                                price={plan.price}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
                
            </div>

            <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleToggle}
                    className={styles.plan__section__button}
                    
                >
                    {isAllVisible ? "Ver menos" : "Ver más"}
                </motion.button>
        </section>
    );
};

export default PlanesSection;
