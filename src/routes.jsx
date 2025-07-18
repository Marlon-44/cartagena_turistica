// src/AppRoutes.jsx
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/landingPage";
import Home from "./pages/HomePage";
import PlanDetails from "./pages/PlanDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <>
            <ScrollToTop />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <LandingPage />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/homePage"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/plan/:id"
                        element={
                            <PageTransition>
                                <PlanDetails />
                            </PageTransition>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    );
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;
