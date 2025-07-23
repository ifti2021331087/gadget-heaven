import React from 'react';
import './Gadget.css'
import { Link } from 'react-router-dom';
const Gadget = ({ gadget }) => {
    const { id,name, price, image } = gadget;
    return (
        <div className="card bg-base-100 w-85 shadow-xl border-1">
            <figure className="px-1 py-1">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl fig object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}BDT</p>
                <div className="card-actions">
                    <Link to={`/gadgets/${id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;