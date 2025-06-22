import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landingPage";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import PlanDetails from "./pages/PlanDetails";
import Footer from "./components/Footer";
const AppRoutes = () =>{
    
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/homePage" element={<Home/>}></Route>
                    <Route path="/plan/:id" element={<PlanDetails/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
}

export default AppRoutes;