import { useNavigate } from "react-router-dom";
import styles from "./index.module.css"
import { useContext } from "react";
import PlanesContext from "../../features/planes/PlanesContext";
const PlanHomeCard = ({ plan }) => {
    const navigate = useNavigate();
    const {planSeleccionado, setPlanSeleccionado}= useContext(PlanesContext);
    const handleClick = () => {
        navigate(`/plan/${plan.id}`);
        setPlanSeleccionado(plan.id)
    };

    return (
        <div className={styles.card__container} onClick={handleClick}>
            <div className={styles.image__section}>
                <img src={plan.imagenes[0]} alt={`${plan.nombre} `} />
            </div>
            <div className={styles.info__section}>
                <h3>{`${plan.nombre}`}</h3>
                <h2>{`$${plan.precio}`}</h2>
                <p>{`Categoria | ${plan.categoria}`}</p>
                <h4>{plan.locacion}</h4>
            </div>
        </div>
    );
};
export default PlanHomeCard;