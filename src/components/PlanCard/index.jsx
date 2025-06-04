import { style } from "framer-motion/client";
import styles from "./planCard.module.css"

const PlanCard = ({url__image, name, place, price}) =>{
    return (
        <div className={styles.plan__card}>
            <img src={url__image} alt="" />
            <h3>{name}</h3>
            <h4>{place}</h4>
            <div className={styles.plan__price}>
                <p>{price}</p>
                <button>Ver Mas</button>
            </div>
        </div>
    )
}

export default PlanCard;