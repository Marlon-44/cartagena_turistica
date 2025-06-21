import { motion } from "framer-motion";
import styles from "./header.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import PlanesContext from "../../features/planes/PlanesContext";
const Header = () =>{
    const { filtrarPorCategoria } = useContext(PlanesContext);
    const navigate = useNavigate();

    const handleCategoriaClick = (categoria) => {
        filtrarPorCategoria(categoria);
        navigate("/homePage"); // Redirige
    };
    const handleLogoClick = () => {
        
        navigate("/"); // Redirige
    };
    return (
    
    <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <div className={styles.header__container}>
            <img className={styles.logo__img} src="/assets/cangrejo.png" alt="Menu Icon" onClick={handleLogoClick} />
            <nav className={styles.menu__nav}>
                <ul>
            <div className={styles.option__selected}>
                <Link className={styles.option__selected__text} to="/homePage">HOME</Link>
            </div>
            <p>|</p>
            <div>
                <button onClick={() => handleCategoriaClick("Island")} className={styles.menu_option}>ISLANDS</button>
            </div>
            <p>|</p>
            <div>
                <button onClick={() => handleCategoriaClick("Yatches")} className={styles.menu_option}>YATCHES</button>
            </div>
            <p>|</p>
            <div>
                <button onClick={() => handleCategoriaClick("City Tour")} className={styles.menu_option}>CITY TOURS</button>
            </div>
        </ul>
            </nav>
            <div className={styles.social__media__container}>
                <div>
                    <img src="/assets/instagramIcon.svg" alt="icon que redirecciona a instagram" />
                </div>
                <div>
                    <img src="/assets/whatsappIcon.svg" alt="Icon que redirecciona a Whatsapp" />
                </div>
                <div>
                    <img src="/assets/facebookIcon.svg" alt="Icon que redirecciona a Facebook" />
                </div>
                
                
            </div>
            
        </div>
            
        </motion.header>
    
        
    )
}

export default Header;