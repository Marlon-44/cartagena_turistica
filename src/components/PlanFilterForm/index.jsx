
import PlanesContext from "../../features/planes/PlanesContext";
import styles from "./index.module.css";
import { useState, useContext } from "react";// ✅ Importar el contexto

const PLANES_PERMITIDOS = [
    "Island", "Yathces", "City Tour"
];

const TIPOS_TRANSMISION_PERMITIDOS = [
    "Automatic", "Manual", "Semi-automatic"
];

const TIPOS_COMBUSTIBLE_PERMITIDOS = [
    "Gasoline", "Diesel", "Electric", "Hybrid", "Natural Gas", "Hydrogen"
];

const TIPOS_TERRENO_PERMITIDOS = [
    "Urban", "Rural", "Mixed", "Highway", "Off-road"
];

const PlanFilterForm = () => {
    const { actualizarOfertas } = useContext(PlanesContext
    ); // ✅ Obtener función del contexto

    const [filters, setFilters] = useState({
        planes: [],
        precio: [80000, 3000000],
        anio: [2000, 2025],
        pasajerosMin: 2,
        pasajerosMax: 50
    });

    const handleCheckbox = (type, value) => {
        setFilters(prev => {
            const updated = prev[type].includes(value)
                ? prev[type].filter(v => v !== value)
                : [...prev[type], value];
            return { ...prev, [type]: updated };
        });
    };

    const handleRadio = (type, value) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    };

    const handleRange = (type, index, value) => {
        const newRange = [...filters[type]];
        newRange[index] = Number(value);
        setFilters(prev => ({ ...prev, [type]: newRange }));
    };

    const handleInputNumber = (type, value) => {
        setFilters(prev => ({ ...prev, [type]: Number(value) }));
    };

    const handleApply = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/planes/filtrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(filters)
            });

            if (!response.ok) throw new Error("Error al aplicar filtros");

            const data = await response.json();

            // ✅ Actualizar el contexto con las ofertas filtradas
            actualizarOfertas(data, filters);
        } catch (error) {
            console.error("Error al aplicar filtros:", error);
        }
    };

    return (
        <aside className={styles.filter__container}>
            <h2>Filtrar vehículos</h2>

            <section className={styles.filter__type}>
                <h3>Tipo de Vehículo</h3>
                <div className={styles.checkbox__group}>
                    {PLANES_PERMITIDOS.map(v => (
                        <label key={v}>
                            <input
                                type="checkbox"
                                checked={filters.planes.includes(v)}
                                onChange={() => handleCheckbox("planes", v)}
                            />
                            {v}
                        </label>
                    ))}
                </div>
            </section>
            <section className={styles.filter__type}>
                <h3>Precio</h3>
                <input
                    type="range"
                    min="80000"
                    max="150000"
                    step="2"
                    value={filters.precio[0]}
                    onChange={(e) => handleRange("precio", 80000, e.target.value)}
                />
                <input
                    type="range"
                    min="150000"
                    max="3000000"
                    step="2"
                    value={filters.precio[1]}
                    onChange={(e) => handleRange("precio", 3000000, e.target.value)}
                />
                <p>${filters.precio[0]} - ${filters.precio[1]}</p>
            </section>

            

            <section className={styles.filter__type}>
                <h3>Capacidad de Pasajeros</h3>
                <label>
                    Mínimo:
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={filters.pasajerosMin}
                        onChange={(e) => handleInputNumber("pasajerosMin", e.target.value)}
                    />
                </label>
                <label>
                    Máximo:
                    <input
                        type="number"
                        min="1"
                        max="100"
                        value={filters.pasajerosMax}
                        onChange={(e) => handleInputNumber("pasajerosMax", e.target.value)}
                    />
                </label>
            </section>

            <button onClick={handleApply} className={styles.apply__button}>
                Aplicar Filtros
            </button>
        </aside>
    );
};

export default PlanFilterForm;
