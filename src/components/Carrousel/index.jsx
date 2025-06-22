import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { style } from "framer-motion/client";
import { useContext } from "react";
import PlanesContext from "../../features/planes/PlanesContext";


const Carrousel = () => {

    const {filtrarPorCategoria} = useContext(PlanesContext);
    const navigate = useNavigate();
    const handleCategoriaClick = (categoria) => {
        filtrarPorCategoria(categoria);
        navigate("/homePage"); 
    };
    return (
        <>
        
            <div
                id="carouselExampleIndicators"
                className={`carousel slide ${styles.carouselContainer}`}
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                        <div className={`${styles.overlayContent} ${styles.right}`}>
                            <h4>Cartagena Turistica</h4>
                            <h2>ILANDS & BEACH CLUBES</h2>

                            <button  onClick={() => handleCategoriaClick("Island")}>Book Now</button>
                        </div>
                        <img className="d-block w-100" src="assets/islands.png" alt="First slide" />
                    </div>

                    <div className="carousel-item position-relative">
                        <div className={`${styles.overlayContent} ${styles.left}`}>

                            <h4>Cartagena Turistica</h4>
                            <h2>YATCHES</h2>
                            <button  onClick={() => handleCategoriaClick("Yatches")}>Book Now</button>
                        </div>
                        <img className="d-block w-100" src="assets/sibarita.png" alt="Second slide" />
                    </div>

                    <div className="carousel-item position-relative">
                        <div className={`${styles.overlayContent} ${styles.left}`}>
                            <h4>Cartagena Turistica</h4>
                            <h2>CITY TOUR</h2>
                            <button onClick={() => handleCategoriaClick("City Tour")}>Book Now</button>
                        </div>
                        <img className="d-block w-100" src="assets/duster.png" alt="Third slide" />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>

    );
};

export default Carrousel;
