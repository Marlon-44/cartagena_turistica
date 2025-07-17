import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanSumamry from "../../components/PlanSummary";
import DetailSection from "../../components/DetailSection";
import Header from "../../components/Header";
import ReviewSection from "../../components/ReviewSection";
import PlanesContext from "../../features/planes/PlanesContext";
import Whatsapp from "../../components/Whatsapp";
import PlanGallery from "./components/PlanGallery";

const PlanDetails = () => {
    const { id } = useParams();
    const { planesOriginales, planSeleccionado } = useContext(PlanesContext);
    //console.log("plan seleccionado ", id);
    console.log("plan seleccionado ", planSeleccionado);
    const plan = planesOriginales.find((p) => p.id === parseInt(id));
    
    if (!plan) return <p>Plan no encontrado</p>;

    return (
        <div style={{width:"100%"}}>  
            <Header/>
            <Whatsapp/>
            <PlanSumamry plan={plan}/>
            <DetailSection plan={plan}/>
            <PlanGallery plan={plan}/>
            <ReviewSection/>
        </div>
    );
};

export default PlanDetails;
