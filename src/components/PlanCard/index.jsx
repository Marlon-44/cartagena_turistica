import { style } from "framer-motion/client";
import styles from "./planCard.module.css"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PlanCard = ({plan}) =>{
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/plan/${plan.id}`);
    };
    return (
        <motion.div 
            initial={{opacity: 0, y:100}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 1.5, ease: "easeOut"}}
            viewport={{once:true, amount: 0.2}}
            className={styles.plan__card}
            onClick={handleClick}>
                
            <img src={plan.imagenes[0]} alt="" />
            <h3 style={{fontSize:"1.2rem"}}>{plan.nombre}</h3>
            
            <div className={styles.plan__price}>
                <p style={{fontSize:"1.2rem"}}>{`$ ${plan.precio}`}</p>
            </div>
            <h4>Cartagena de Indias</h4>
        </motion.div>
    )
}

export default PlanCard;