import styles from "./title.module.css"
import { motion } from "framer-motion";
const SectionTitle =({sectionName})=>{
    return(
        
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className={styles.section__title }>
                {sectionName}
            </motion.h2>
        
    )
}

export default SectionTitle;