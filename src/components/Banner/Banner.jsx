import React from 'react';
import bannerImg from '../../assets/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>

            <div
                className="hero  box-1"
                style={{
                    backgroundColor: '#9929EA',
                    opacity: 1,
                    filter: 'brightness(2.2)',

                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center pt-20 pb-40">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="mb-5">
                            Enhance your tech experience with top-quality accessories from Gadget Heaven.
                        </p>
                        <button className="btn btn-active btn-info text-lg rounded-lg">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='box-2  max-w-[1000px] mx-auto border rounded-lg'>
                <img src={bannerImg} className='object-cover rounded-lg sec-img' alt="" />
            </div>
        </div>
    );
};

export default Banner;