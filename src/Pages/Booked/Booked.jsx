import { Link } from "react-router-dom";


const Booked = ({ booked }) => {
    const { id, title, price, img } = booked;
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="3000" className="card card-compact bg-base-100">
                <figure><img src={img} alt={title} /></figure>
                <div className="flex justify-between text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-title">Price: ${price}</p>
                </div>
                <div className="card-actions justify-center">
                   <Link to={`/events/${id}`}> <button className="btn btn-primary">Check Details</button></Link>
                </div>
            </div>
        </>
    );
};

export default Booked;