export async function getPlanes() {
    try {
        const response = await fetch("/planes.json"); // accede al archivo en /public
        if (!response.ok) {
            throw new Error("Error getting the plans");
        }
        const planes = await response.json();
        return planes;
    } catch (error) {
        console.error("error in: getPlanes()", error);
        return [];
    }
}

export async function getPlanesDestacados() {
    try {
        const response = await fetch("/planes.json"); // accede al archivo en /public
        if (!response.ok) {
            throw new Error("Error getting the plans");
        }
        const planes = await response.json();
        const planesDestacados = planes.filter(plan => plan.destacado === true);
        return planesDestacados;
    } catch (error) {
        console.error("error in: getPlanesDestacados()", error);
        return [];
    }
}

