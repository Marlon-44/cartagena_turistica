import { useParams } from "react-router-dom";
import { useContext } from "react";
import PlanSumamry from "../../components/PlanSummary";
import DetailSection from "../../components/DetailSection";
import Header from "../../components/Header";
import ReviewSection from "../../components/ReviewSection";
import PlanesContext from "../../features/planes/PlanesContext";
import Whatsapp from "../../components/Whatsapp";

const PlanDetails = () => {
    const { id } = useParams();
    const { planes } = useContext(PlanesContext);
    console.log("plan seleccionado ", id);
const plan = planes.find((p) => p.id === parseInt(id));

    if (!plan) return <p>Plan no encontrado</p>;

    return (
        <>  
            <Header/>
            <Whatsapp/>
            <PlanSumamry plan={plan}/>
            <DetailSection plan={plan}/>
            <ReviewSection/>
        </>
    );
};

export default PlanDetails;
