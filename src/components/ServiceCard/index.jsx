import styles from "./Service.modules.css"
const ServiceCard =({nombre, info, reference})=>{

    return(
        <div className={styles.service__card}>
            <div className={styles.service__card__overlay}>
                <h3>{nombre}</h3>
                <p>{info}</p>
                <button>
                    <a href={reference}></a>
                </button>
            </div>
        </div>
    )
}

export default ServiceCard;