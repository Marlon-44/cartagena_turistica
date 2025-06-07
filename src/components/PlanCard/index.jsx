import { style } from "framer-motion/client";
import styles from "./planCard.module.css"
import { motion } from "framer-motion";

const PlanCard = ({url__image, name, place, price}) =>{
    return (
        <motion.div 
            initial={{opacity: 0, y:100}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 1.5, ease: "easeOut"}}
            viewport={{once:true, amount: 0.2}}
            className={styles.plan__card}>
                
            <img src={url__image} alt="" />
            <h3>{name}</h3>
            <h4>{place}</h4>
            <div className={styles.plan__price}>
                <p>{price}</p>
                <button className={styles.plan__card__button}>Ver Mas</button>
            </div>
        </motion.div>
    )
}

export default PlanCard;