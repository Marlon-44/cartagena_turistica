import Subtitle from "../Subtitle";
import styles from "./index.module.css"

const DetailSection = ({plan}) => {
    return (
        <section className={styles.plan__details}>
            <Subtitle text ="Plan Features"/>
            <div className={styles.plan__description}>
                <p>{plan.descripcion}</p>
            </div>
        </section>

    );
};

export default DetailSection;
