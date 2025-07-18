import { motion } from "framer-motion";
import styles from "./header.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import PlanesContext from "../../features/planes/PlanesContext";
import { Facebook, FacebookOutlined, FacebookRounded, Instagram, WhatsApp } from "@mui/icons-material";
const Header = ({ telefono = "573024453961" }) => {
    const { filtrarPorCategoria, resetearFiltros } = useContext(PlanesContext);
    const navigate = useNavigate();

    const handleCategoriaClick = (categoria) => {
        filtrarPorCategoria(categoria);
        navigate("/homePage"); // Redirige
    };
    const handleLogoClick = () => {

        navigate("/"); // Redirige
    };
    const handleHomeClick = () => {
    resetearFiltros();  // ← borra filtros y vuelve al array original
    navigate("/homePage");
};
    const mensaje = encodeURIComponent("¡Hola! Estoy interesado en conocer más sobre los planes.");
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
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
                            <a className={styles.option__selected__text} onClick={handleHomeClick}>HOME</a>
                        </div>
                        <p>|</p>
                        <div>
                            <button onClick={() => handleCategoriaClick("ISLA")} className={styles.menu_option}>ISLAS</button>
                        </div>
                        <p>|</p>
                        <div>
                            <button onClick={() => handleCategoriaClick("EMBARCACION")} className={styles.menu_option}>EMBARCACIONES</button>
                        </div>
                        <p>|</p>
                        <div>
                            <button onClick={() => handleCategoriaClick("TOUR")} className={styles.menu_option}>TOURS</button>
                        </div>
                    </ul>
                </nav>
                <div className={styles.social__media__container}>
                    <div>
                        <a href="https://www.instagram.com/cartagena_turistica_/?hl=es">
                            
                            <Instagram sx={{color: "white"}}/>
                        </a>
                    </div>
                    <div>
                        <a href={url}>
                            <WhatsApp sx={{color: "white"}}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/cartagena_turistica_/?hl=es">
                            <FacebookRounded sx={{color: "white"}}/>
                        </a>
                    </div>


                </div>

            </div>

        </motion.header>


    )
}

export default Header;