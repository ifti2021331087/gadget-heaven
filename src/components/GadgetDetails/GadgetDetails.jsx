import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import '../GadgetDetails/GadgetDetails.css'
import Specification from '../Specification/Specification';
import { addToStoredReadList, addToWishlist } from '../Utility/addToDB';
const GadgetDetails = () => {
    const { id } = useParams();
    const Id = parseInt(id);
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.id === Id);
    const { id:gadgetId,image, name, price, instock, details, specification, ratings } = gadget;
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
                <div className="hero-content text-neutral-content text-center pt-10 pb-20">
                    <div className="max-w-4xl">
                        <h1 className="mb-5 text-4xl font-bold">Product Details</h1>
                        <p className="mb-5">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className=' box max-w-[1000px] bg-gray-50 mx-auto border rounded-lg flex gap-5 sm:flex-col md:flex-row lg:flex-row'>
                <div className=''>
                    <img src={image} className='object-cover rounded-lg image' alt="" />
                </div>
                <div className='p-3 text-start'>
                    <h1 className="mb-2 text-3xl font-bold">{name}</h1>
                    <h1 className="mb-2 text-md font-bold">Price: {price}BDT</h1>
                    {instock === true ? <button className='btn btn-outline btn-success rounded-lg mb-2'>In Stock</button> : ''}
                    <p className='text-gray-400 mb-2'>{details}</p>
                    <h1 className="text-md font-bold">Specification:</h1>
                    <div className='mb-2 '>
                        {Object.entries(specification).map(([key, value]) => (
                            <Specification key={key} spec={`${key}: ${value}`} />
                        ))}
                    </div>
                    <h1 className="mb-2 text-md font-bold">Ratings:</h1>
                    <div className='flex gap-2 mb-2'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                        <div>
                            <button className='btn'>{ratings}</button>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <button className="btn btn-primary" onClick={()=>addToStoredReadList(gadgetId)}>Add to cart</button>
                        <button className="btn btn-circle" onClick={() => addToWishlist(gadgetId)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;

