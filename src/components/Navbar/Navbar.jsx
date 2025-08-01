import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { getStoredReadList, getStoredWishlist } from '../Utility/addToDB';

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/statistics">Statistics</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>

    const [allGadgets, setAllGadgets] = useState([]);
    useEffect(() => {
        fetch('gadgetData.JSON')
            .then(res => res.json())
            .then(data => setAllGadgets(data));
    }, []);
    const storedCart = getStoredReadList();
    const storedWishlist = getStoredWishlist();
    const storedCartInt = storedCart.map(id => parseInt(id));
    const storedWishlistInt = storedWishlist.map(id => parseInt(id));
    const cartGadgets = allGadgets.filter(gadget => storedCartInt.includes(gadget.id));
    const wishlistGadgets = allGadgets.filter(gadget => storedWishlistInt.includes(gadget.id));
    let cartPrice = 0;
    cartGadgets.map(gadget => cartPrice += gadget.price);
    let wishlistPrice = 0;
    wishlistGadgets.map(gadget => wishlistPrice += gadget.price);

    return (
        <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">{storedCart.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{cartGadgets.length} Items</span>
                            <span className="text-info">Subtotal: {cartPrice}Tk</span>
                            <div className="card-actions">
                                <Link to="/dashboard" className="btn btn-primary btn-block">View cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            <span className="badge badge-sm indicator-item">{storedWishlist.length}</span>
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">{wishlistGadgets.length} Items</span>
                            <span className="text-info">Subtotal: {wishlistPrice}Tk</span>
                            <div className="card-actions">
                                <Link to="/dashboard?view=wishlist" className="btn btn-primary btn-block">View wishlist</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;