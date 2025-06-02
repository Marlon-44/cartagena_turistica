import clsx from "clsx";
import styles from "./banner.module.css"
import { motion } from "framer-motion";
import LightButtom from "../LightButtom";

const Banner = () => {

    return(
        
        <section className={styles.general__section}>
            <section className={styles.images__section}>
                <motion.div 
                    initial={{ y: 200, opacity: 0 }}     
                    animate={{ y: 0, opacity: 1 }}       
                    transition={{ duration: 2, ease: "easeOut" }}
                    className={clsx(styles.banner__image, styles.up, styles.div1)}>
                    
                </motion.div>
                <motion.div 
                    
                    initial={{y: 200, opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    transition={{duration: 2, delay:0.5, ease: "easeOut"}}
                    className={`${styles.banner__image} ${styles.div2} `}>
                </motion.div>

                <motion.div
                    initial={{y:200, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:2, delay:1, ease: "easeOut"}}
                    className={clsx(styles.banner__image, styles.up, styles.div3)}>
                    <button className={styles.banner__button}>
                        <a  href="">More Info</a>
                    </button>
                </motion.div>
                <motion.div 
                    initial={{y:200 , opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    transition={{duration: 2, delay:1.5, ease:"easeOut"}}
                    className={`${styles.banner__image} ${styles.image__text__container} ${styles.div4} `}>
                    <motion.h2 
                        initial={{x:200, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 3, delay: 2, ease:"easeOut"}}
                        className={styles.banner__title}><span className={styles.title__highlight}>EX</span>PLORE</motion.h2>

                    <div className={styles.banner__info}>
                        <h3 className={styles.banner__subtitle}>
                            CARTAGENA
                        </h3>
                        <p className={styles.banner__paragraph}>
                            Descubre la magia de Cartagena con nuestros planes turísticos personalizados. Recorre sus calles llenas de historia, disfruta de sus playas paradisíacas y vive experiencias inolvidables en la joya del Caribe colombiano.
                        </p>
                    </div>
                    
                </motion.div>
                
            </section>
            
            
        </section>
    )
}

export default Banner;