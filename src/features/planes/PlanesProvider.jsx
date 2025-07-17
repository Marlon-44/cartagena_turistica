import { useEffect, useState } from "react";
import PlanesContext from "./PlanesContext";
import { getPlanes, getPlanesDestacados } from "../../api/planes";

const PlanesProvider = ({ children }) => {
    const [planes, setPlanes] = useState([]);
    const [planesOriginales, setPlanesOriginales] = useState([]); // ← base sin tocar
    const [planesDestacados, setPlanesDestacados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtrosAplicados, setFiltrosAplicados] = useState(null);
    const [planSeleccionado, setPlanSeleccionado] = useState(null);

    const cargarPlanes = async () => {
        setLoading(true);
        const [todos, destacados] = await Promise.all([
            getPlanes(),
            getPlanesDestacados()
        ]);
        setPlanes(todos);
        setPlanesOriginales(todos); 
        setPlanesDestacados(destacados);
        setLoading(false);
    };

    useEffect(() => {
        cargarPlanes();
    }, []);

    const actualizarPlanes = (nuevosPlanes, filtros = null) => {
        setPlanes(nuevosPlanes);
        setFiltrosAplicados(filtros);
    };

    const filtrarPorCategoria = (categoria) => {

        const filtrados = planesOriginales.filter(plan => plan.categoria === categoria);
        actualizarPlanes(filtrados, { categoria });
    };

    const resetearFiltros = () => {
        actualizarPlanes(planesOriginales, null);
    };

    return (
        <PlanesContext.Provider value={{
            planes,
            planesDestacados,
            loading,
            actualizarPlanes,
            filtrosAplicados,
            filtrarPorCategoria,
            resetearFiltros,
            cargarPlanes,
            planesOriginales, 
            planSeleccionado,
            setPlanSeleccionado
        }}>
            {children}
        </PlanesContext.Provider>
    );
};

export default PlanesProvider;
