import { CheckOutlined, CloseOutlined } from "@mui/icons-material";
import Subtitle from "../Subtitle";
import styles from "./index.module.css"

const DetailSection = ({ plan }) => {
    return (
        <section className={styles.plan__details}>
            <Subtitle text="Descripcion del plan" />
            <div className={styles.plan__description}>
                <p>{plan.descripcion}</p>
                <div className={styles.whats__included__box}>
                    <ul >
                        <h4>Incluye</h4>
                        {
                            plan.incluye.map((item, index) => (
                                <li key={index}><CheckOutlined sx={{ color: "green" }} />{item}</li>
                            ))
                        }
                    </ul>

                    <ul>
                        <h4>No Incluye</h4>
                        {
                            plan.noIncluye.map((item, index) => (
                                <li key={index}><CloseOutlined sx={{ color: "red" }} />{item}</li>
                            ))
                        }
                    </ul>
                </div>


            </div>
        </section>

    );
};

export default DetailSection;
