import { ReviewsContext } from "./ReviewsContext";

const reviews = [
    {
        user: "Carlos López",
        text: "El tour por las islas fue espectacular. Las playas son increíbles.",
        date: "2024-12-01",
    },
    {
        user: "María Torres",
        text: "La chiva rumbera fue una experiencia única. ¡Súper divertida!",
        date: "2024-12-02",
    },
    {
        user: "Juan Pérez",
        text: "Excelente guía turístico y muy buen recorrido por el centro histórico.",
        date: "2024-12-03",
    },
    {
        user: "Lucía Gómez",
        text: "El paseo en yate fue lo mejor del viaje. Muy recomendado.",
        date: "2024-12-04",
    },
    {
        user: "Andrés Ramírez",
        text: "Todo muy bien organizado. Nos encantó el plan en Barú.",
        date: "2024-12-05",
    },
    {
        user: "Daniela Morales",
        text: "Un plan perfecto para desconectar. La comida fue deliciosa.",
        date: "2024-12-06",
    },
    {
        user: "Santiago Jiménez",
        text: "Muy buen ambiente y excelente atención durante todo el tour.",
        date: "2024-12-07",
    },
    {
        user: "Camila Herrera",
        text: "Reservar el plan fue muy fácil. La experiencia superó mis expectativas.",
        date: "2024-12-08",
    },
    {
        user: "Mateo Ruiz",
        text: "Todo estuvo bien, aunque hubiera preferido más tiempo en la playa.",
        date: "2024-12-09",
    },
    {
        user: "Valentina Cruz",
        text: "El plan nocturno fue mágico. Muy buena música y ambiente.",
        date: "2024-12-10",
    },
    {
        user: "David Mendoza",
        text: "Buen precio por todo lo que incluye. Volvería a tomar este tour.",
        date: "2024-12-11",
    },
    {
        user: "Isabella Fernández",
        text: "Una experiencia inolvidable. Todo fue perfecto.",
        date: "2024-12-12",
    },
];


export const ReviewsProvider = ({ children }) => {
    return (
        <ReviewsContext.Provider value={{ reviews }}>
            {children}
        </ReviewsContext.Provider>
    )
}