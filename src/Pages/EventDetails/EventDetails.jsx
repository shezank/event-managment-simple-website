import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getEventsSaveId, saveEventsId } from "../../Sharde/LocalStorage/LocalStorage";


const EventDetails = () => {
    const events = useLoaderData();
    const idx = useParams();
    const idNo = parseInt(idx.id);

    const eventsDetails = events.find(event => event.id == idNo);
    const {id, title, price, shortDescription, img, buttonText } = eventsDetails;

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
        <div className="card card-compact bg-base-100 my-10">
            <h2 className="text-5xl font-bold text-center my-10">{title}</h2>
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <p className="text-2xl"> <span className="font-semibold">Pakage Details:</span> {shortDescription}</p>
                <p className="text-4xl font-semibold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> handleBookNow(id)} className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EventDetails;