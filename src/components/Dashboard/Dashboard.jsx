import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../Utility/addToDB';
import DashboardDetail from '../DashboardDetail/DashboardDetail';

const Dashboard = () => {
    const allGadgets = useLoaderData();
    const storedGadgets = getStoredReadList();
    const storedGadgetsInt = storedGadgets.map(id => parseInt(id));
    const myGadgets = allGadgets.filter(gadget => storedGadgetsInt.includes(gadget.id));

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
                            <button className="btn btn-soft btn-primary px-10 rounded-xl">Cart</button>
                            <button className="btn btn-soft btn-primary px-8 rounded-xl">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            {myGadgets.length === 0 && <h1 className='text-center text-3xl my-20'>Nothing to show</h1>}
            <div className='max-w-7xl mx-auto'>
                {
                    myGadgets.map(gadget=><DashboardDetail gadget={gadget}></DashboardDetail>)
                }
            </div>
        </div>

    );
};

export default Dashboard;