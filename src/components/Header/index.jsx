import { motion } from "framer-motion";
import styles from "./header.module.css"
const Header = () =>{

    return (
    
    <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <div className={styles.header__container}>
            <img className={styles.burger__menu__img} src="assets/burgerMenu.svg" alt="Menu Icon" />
            <nav className={styles.menu__nav}>
                <ul>
                    <div className={styles.option__selected}>
                        <a className={styles.option__selected__text} href="">HOME</a>
                    </div>
                    <p>|</p>
                    <div><a className={styles.menu_option}  href="">PLACES</a></div>
                    <p>|</p>
                    <div><a className={styles.menu_option}   href="">YATCHES</a></div>
                    <p>|</p>
                    <div><a className={styles.menu_option}   href="">CONTACT US</a></div>
                </ul>
            </nav>
            <div className={styles.social__media__container}>
                <div>
                    <img src="assets/instagramIcon.svg" alt="icon que redirecciona a instagram" />
                </div>
                <div>
                    <img src="assets/whatsappIcon.svg" alt="Icon que redirecciona a Whatsapp" />
                </div>
                <div>
                    <img src="assets/facebookIcon.svg" alt="Icon que redirecciona a Facebook" />
                </div>
                
                
            </div>
            
        </div>
            
        </motion.header>
    
        
    )
}

export default Header;