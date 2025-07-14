import Subtitle from "../Subtitle";
import styles from "./index.module.css"

const DetailSection = ({plan}) => {
    return (
        <section className={styles.plan__details}>
            <Subtitle text ="Descripcion del plan"/>
            <div className={styles.plan__description}>
                <p>{plan.descripcion}</p>
                <h4>Incluye</h4>
                <ul>
                    {
                    plan.incluye.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
                </ul>
                <h4>No Incluye</h4>
                <ul>
                    {
                    plan.noIncluye.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
                </ul>
                
            </div>
        </section>

    );
};

export default DetailSection;
