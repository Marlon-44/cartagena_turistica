import styles from "./index.module.css";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

const PlanSummary = ({ plan }) => {
    const [activePhoto, setActivePhoto] = useState(plan.imagenes[0]);

    const [selectedDate, setSelectedDate] = useState(null);
    const [numPersonas, setNumPersonas] = useState("");
    const [errors, setErrors] = useState({
        date: "",
        personas: ""
    });

    const handleMouseEnter = (url) => {
        setActivePhoto(url);
    };

    const handleBooking = () => {
    let hasError = false;
    const newErrors = { date: "", personas: "" };

    if (!selectedDate) {
        newErrors.date = "Selecciona una fecha válida";
        hasError = true;
    }

    if (!numPersonas || isNaN(numPersonas) || parseInt(numPersonas) <= 0) {
        newErrors.personas = "Ingresa un número válido de personas";
        hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
        const telefono = "573024453961"; // tu número en formato internacional sin '+'
        const fechaFormateada = selectedDate.format("DD/MM/YYYY"); // usando dayjs
        const mensaje = `¡Hola! Estoy interesado en el plan *${plan.nombre}* para *${numPersonas}* personas el día *${fechaFormateada}*. ¿Me puedes dar más información?`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        const url = `https://wa.me/${telefono}?text=${mensajeCodificado}`;
        window.open(url, "_blank");
    }
};

    return (
        <section className={styles.vehicle__summary}>
            <div className={styles.vehicle__photos}>
                <div className={styles.photos}>
                    {plan.imagenes.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`${plan.marca}-${index}`}
                            onMouseEnter={() => handleMouseEnter(url)}
                            className={styles.thumbnail}
                        />
                    ))}
                </div>
                <img className={styles.active} src={activePhoto} alt={`${plan.nombre}`} />
            </div>

            <div className={styles.summary__info}>
                <h1>{plan.nombre}</h1>
                <p> ⭐ ⭐ ⭐ ⭐ ⭐   5/5</p>
                <h2>${plan.precio}/día</h2>

                <div className={styles.inputs__section}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className={styles.datepicker}
                            label="Selecciona una fecha"
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    error={!!errors.date}
                                    helperText={errors.date}
                                    sx={{ marginBottom: 2 }}
                                />
                            )}
                        />
                    </LocalizationProvider>

                    <TextField
                        type="number"
                        label="Cantidad de personas"
                        value={numPersonas}
                        onChange={(e) => setNumPersonas(e.target.value)}
                        error={!!errors.personas}
                        helperText={errors.personas}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                </div>

                            
                <button className={styles.book__button} onClick={handleBooking}>Reservar</button>
            </div>
        </section>
    );
};

export default PlanSummary;
