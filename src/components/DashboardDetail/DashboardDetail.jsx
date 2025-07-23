import React from 'react';
import './DashboardDetail.css'
const DashboardDetail = ({gadget}) => {
    const {image,name,details,price}=gadget;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-lg border-2 my-5">
                <figure className='dash-img'>
                    <img
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>{price} TK</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardDetail;