import { useNavigate } from "react-router-dom";
import styles from "./index.module.css"
const PlanHomeCard = ({ plan }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/plan/${plan.id}`);
    };

    return (
        <div className={styles.card__container} onClick={handleClick}>
            <div className={styles.image__section}>
                <img src={plan.imagenes[0]} alt={`${plan.nombre} `} />
            </div>
            <div className={styles.info__section}>
                <h3>{`${plan.nombre}`}</h3>
                <h2>{`$${plan.precio} /day`}</h2>
                <p>{`Category | ${plan.categoria} Km`}</p>
                <h4>Cartagena De Indias - Bolivar</h4>
            </div>
        </div>
    );
};
export default PlanHomeCard;