import { useEffect, useState } from "react";
import Event from "../Event/Event";


const Events = () => {
    const [events, SetEvents] = useState();
    console.log(events);

    useEffect(()=>{
        fetch('events.json')
        .then(res => res.json())
        .then(data => SetEvents(data))
    },[])


    return (
        <div className="my-20">
            <div className="text-center space-y-4">
            <p className="text-4xl font-medium">Choose your holiday</p>
            <h1 className="text-6xl font-bold">Our Events Packages</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
                {
                    events?.map(event => <Event key={event.id} event={event}></Event>)
                }
            </div>

        </div>
    );
};

export default Events;