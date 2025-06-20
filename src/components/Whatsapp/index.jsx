import styles from "./index.module.css";

const Whatsapp = ({ telefono = "573024453961" }) => {
    const mensaje = encodeURIComponent("¡Hola! Estoy interesado en conocer más sobre los planes.");
    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img
                className={styles.whatsapp__option}
                src="/assets/whatsappIcon.svg"
                alt="Chat en WhatsApp"
            />
        </a>
    );
};

export default Whatsapp;
