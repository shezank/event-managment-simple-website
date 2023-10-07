import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EventDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();
    console.log(typeof id, events)

    const eventsDetails = events.find(event => event.id == id);
    console.log(eventsDetails);
    const { title, price, shortDescription, img, buttonText } = eventsDetails;

    return (
        <div className="card card-compact bg-base-100 my-10">
            <h2 className="text-5xl font-bold text-center my-10">{title}</h2>
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <p className="text-2xl"> <span className="font-semibold">Pakage Details:</span> {shortDescription}</p>
                <p className="text-4xl font-semibold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> toast.success("Successfully Book Your Party")} className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EventDetails;