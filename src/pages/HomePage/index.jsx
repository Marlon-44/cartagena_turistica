// src/Pages/Home/index.jsx
import { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import PlanCard from "../../components/PlanCard";
import PlanFilterForm from "../../components/PlanFilterForm";
import Carrousel from "../../components/Carrousel";
import Header from "../../components/Header";
import PlanHomeCard from "../../components/PlanHomeCard";
import PlanesContext from "../../features/planes/PlanesContext";
import Whatsapp from "../../components/Whatsapp";

const Home = () => {
    const {planes, loading } = useContext(PlanesContext);
    console.log("Planes: ", planes);
    const [currentPage, setCurrentPage] = useState(1);
    const plansPerPage = 9;

    
    // Cálculo de índices
    const indexOfLastPlan = currentPage * plansPerPage;
    const indexOfFirstPlan = indexOfLastPlan - plansPerPage;
    const currentPlans = planes.slice(indexOfFirstPlan, indexOfLastPlan);

    const totalPages = Math.ceil(planes.length / plansPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const renderPagination = () => {
        const pageItems = [];
        for (let i = 1; i <= totalPages; i++) {
            pageItems.push(
                <li
                    key={i}
                    className={`page-item ${currentPage === i ? "active" : ""}`}
                    onClick={() => handlePageChange(i)}
                >
                    <a className="page-link" href="#">{i}</a>
                </li>
            );
        }

        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        >
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {pageItems}
                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <a
                            className="page-link"
                            href="#"
                            aria-label="Next"
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        >
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    };

    return (
        <>
        <Header/>
        <Carrousel/>
            <section className={styles.home__main__section}>
                <PlanFilterForm />
                <section className={styles.home__vehicles__section}>
                    <div className={styles.vehicles__container}>
                        {loading ? (
                            <p>Cargando vehículos...</p>
                        ) : currentPlans.length === 0 ? (
                            <p>No se encontraron vehículos.</p>
                        ) : (
                            currentPlans.map((plan) => (
                                <PlanHomeCard key={plan.id} plan={plan} />
                            ))
                        )}
                    </div>
                    {planes.length > plansPerPage && renderPagination()}
                </section>
            </section>
            <Whatsapp/>
        </>

    );
};

export default Home;
