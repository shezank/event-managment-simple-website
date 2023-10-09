
import { useContext } from "react";
import Header from "../../Sharde/Header/Header";
import { getEventsSaveId, saveEventsId } from "../../Sharde/LocalStorage/LocalStorage";
import Events from "../Events/Events";
import OurTeams from "../OurTeams/OurTeams";
import Users from "../Users/Users";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
   

    const handleBookNow = id =>{
        const getEventsId = getEventsSaveId();
        const existed = getEventsId.includes(id);
        if(existed){
            toast.warning("Already Book Same Events")
        }
        else{
            saveEventsId(id)
            toast.success("Successfuly Book Now Your Event")
        }
    }

    return (
        <div>
            <Header></Header>
            <Events handleBookNow={handleBookNow}></Events>
            <OurTeams></OurTeams>
            <Users></Users>
            <ToastContainer />
        </div>
    );
};

export default Home;