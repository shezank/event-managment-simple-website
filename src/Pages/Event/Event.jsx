import { Link } from "react-router-dom";


const Event = ({ event }) => {
    const {id, title, price, img, buttonText } = event;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-3xl font-medium">${price}</p>
                <div className="card-actions justify-between">
                    <Link to={`/events/${id}`}><button className="btn btn-outline btn-info">Lear More</button></Link>
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Event;