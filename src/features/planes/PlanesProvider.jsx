import { useEffect, useState } from "react";
import PlanesContext from "./PlanesContext";
import { getPlanes, getPlanesDestacados } from "../../api/planes";

const PlanesProvider = ({ children }) => {
    const [planes, setPlanes] = useState([]);
    const [planesDestacados, setPlanesDestacados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filtrosAplicados, setFiltrosAplicados] = useState(null);

    useEffect(() => {
        const cargarPlanes = async () => {
            setLoading(true);
            const [todos, destacados] = await Promise.all([
                getPlanes(),
                getPlanesDestacados()
            ]);
            setPlanes(todos);
            setPlanesDestacados(destacados);
            setLoading(false);
        };
        cargarPlanes();
    }, []);

    const actualizarPlanes = (nuevosPlanes, filtros = null) => {
        setPlanes(nuevosPlanes);
        setFiltrosAplicados(filtros);
    };

    return (
        <PlanesContext.Provider value={{
            planes,
            planesDestacados,
            loading,
            actualizarPlanes,
            filtrosAplicados
        }}>
            {children}
        </PlanesContext.Provider>
    );
};

export default PlanesProvider;
