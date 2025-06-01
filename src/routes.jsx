import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/landingPage"
const AppRoutes = () =>{
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                </Routes>
            </BrowserRouter>
        )
}

export default AppRoutes;