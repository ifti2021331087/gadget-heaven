// import React from 'react';
// import './DashboardDetail.css'
// import { RxCross2 } from "react-icons/rx";
// const DashboardDetail = ({ gadget }) => {
//     const { image, name, details, price } = gadget;
//     return (
//         <div>
//             <div className="card card-side bg-base-100 shadow-lg border-2 my-5">
//                 <figure className='dash-img'>
//                     <img
//                         src={image}
//                         alt="Movie" />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">{name}</h2>
//                     <p>{details}</p>
//                     <p>{price} TK</p>
//                 </div>
//                 <button className='btn text-red-600 font-bold border'><RxCross2 /></button>
//             </div>
//         </div>
//     );
// };

// export default DashboardDetail;


import React from 'react';
import './DashboardDetail.css';
import { RxCross2 } from "react-icons/rx";
import { removeFromCart, removeFromWishlist } from '../Utility/addToDB';

const DashboardDetail = ({ gadget, view }) => {
    const { image, name, details, price } = gadget;

    const handleRemove = () => {
        if (view === 'cart') {
            removeFromCart(gadget.id);
        } else if (view === 'wishlist') {
            removeFromWishlist(gadget.id);
        }
        // Note: The parent component (Dashboard) needs to re-fetch the list after removal
        window.location.reload(); // Temporary reload to update the UI; consider state management instead
    };

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
                <button className='btn text-red-600 font-bold border' onClick={handleRemove}><RxCross2 /></button>
            </div>
        </div>
    );
};

export default DashboardDetail;


