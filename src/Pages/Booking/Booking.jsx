import { useLoaderData } from "react-router-dom";
import { getEventsSaveId } from "../../Sharde/LocalStorage/LocalStorage";
import Booked from "../Booked/Booked";


const Booking = () => {
    const getId = getEventsSaveId();
    const events = useLoaderData();

    const booking = events.filter(event => getId.includes(event.id))
    console.log(booking)


    return (
        <>
            <div className="my-10">
                <h1 className="text-center text-2xl lg:text-4xl font-medium">Thanks For Booking Our Events</h1>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 mx-6 lg:mx-0 my-10">
                {
                    booking.map(booked => <Booked key={booked.id} booked={booked}></Booked>)
                }
            </div>
        </>
    );
};

export default Booking;