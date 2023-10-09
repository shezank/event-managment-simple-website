import { Link } from "react-router-dom";



const Event = ({ event, handleBookNow }) => {
    const {id, title, price, img, buttonText } = event;
    
    return (
        <div data-aos="flip-left" className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-3xl font-medium">${price}</p>
                <div className="card-actions justify-between">
                    <Link to={`/events/${id}`}><button className="btn btn-outline btn-info">See Details</button></Link>
                    <button onClick={()=>handleBookNow(id)} className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Event;