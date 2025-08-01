import React, { useState, useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { getStoredReadList, getStoredWishlist } from '../Utility/addToDB';
import DashboardDetail from '../DashboardDetail/DashboardDetail';

const Dashboard = () => {
    const allGadgets = useLoaderData();
    const location = useLocation();
    const [view, setView] = useState('cart');

    useEffect(() => {
        // Check URL query parameter to set the initial view
        const searchParams = new URLSearchParams(location.search);
        const viewParam = searchParams.get('view');
        if (viewParam === 'wishlist') {
            setView('wishlist');
        } else {
            setView('cart');
        }
    }, [location.search]);

    const storedCart = getStoredReadList();
    const storedWishlist = getStoredWishlist();
    const storedGadgetsInt = (view === 'cart' ? storedCart : storedWishlist).map(id => parseInt(id));
    const myGadgets = allGadgets.filter(gadget => storedGadgetsInt.includes(gadget.id));
    const totalPrice = myGadgets.reduce((sum, gadget) => sum + gadget.price, 0);

    return (
        <div>
            <div
                className="hero"
                style={{
                    backgroundColor: '#9929EA',
                    opacity: 1,
                    filter: 'brightness(2.2)',
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center pt-10">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-4xl font-bold">Dashboard</h1>
                        <p className="mb-5">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className='flex justify-center gap-2'>
                            <button
                                className={`btn btn-soft ${view === 'cart' ? 'btn-active' : ''} btn-primary px-10 rounded-xl`}
                                onClick={() => setView('cart')}
                            >
                                Cart
                            </button>
                            <button
                                className={`btn btn-soft ${view === 'wishlist' ? 'btn-active' : ''} btn-primary px-8 rounded-xl`}
                                onClick={() => setView('wishlist')}
                            >
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto p-5'>
                <h2 className='text-2xl font-bold mb-4'>
                    {view === 'cart' ? 'Cart Items' : 'Wishlist Items'} ({myGadgets.length} items)
                </h2>
                {myGadgets.length > 0 && (
                    <p className='text-lg font-semibold mb-4'>
                        Total Price: {totalPrice} TK
                    </p>
                )}
                {myGadgets.length === 0 && <h1 className='text-center text-3xl my-20'>Nothing to show</h1>}
                <div className='space-y-5'>
                    {myGadgets.map(gadget => (
                        <DashboardDetail key={gadget.id} gadget={gadget} view={view} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;