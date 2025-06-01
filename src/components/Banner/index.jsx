import clsx from "clsx";
import styles from "./banner.module.css"

const Banner = () => {

    return(
        <section className={styles.general__section}>
            <section className={styles.images__section}>
                <div className={clsx(styles.banner__image, styles.up)}></div>
                <div className={`${styles.banner__image} ${styles.down}`}></div>
                <div className={clsx(styles.banner__image, styles.up)}></div>
                <div className={`${styles.banner__image} ${styles.down}`}>
                   <h2>EXPLORE</h2>
                </div>
            </section>
            
            
        </section>
    )
}

export default Banner;