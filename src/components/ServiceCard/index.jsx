import styles from "./serviceCard.module.css"
import { motion } from "framer-motion"
const ServiceCard =({nombre, info, reference})=>{
    console.log("SERVICE: ", nombre," , ", info, " , ",reference)
    return(
        <motion.div 
        initial={{opacity: 0, y:100}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1.5, ease: "easeOut"}}
        viewport={{once:true, amount: 0.2}}
        className={styles.service__card} style={{backgroundImage: `url(${reference})`}} >
            
            <div className={styles.service__card__overlay} >
                <div className={styles.service__card__info}>
                    <h3>{nombre}</h3>
                    <p>{info}</p>
                </div>
                
                <button className={styles.service__card__button}>
                    <a href={reference}>Explore Now</a>
                    <img src="assets/chebron__right.png" alt="" />
                </button>
            </div>
        </motion.div>
    )
}

export default ServiceCard;