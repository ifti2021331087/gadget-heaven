import React, { useEffect, useState } from 'react';
import CategoryButton from '../CategoryButton/CategoryButton';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('gadgetData.JSON')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    const [activeCategory, setActiveCategory] = useState('All Product');
    const handleActiveClick=(category)=>{
        console.log(category);
        // {
        //     activeCategory.map(category=>console.log(category));
        // }
        setActiveCategory(category);
    }
    const uniqueCategories = ['All Product', ...new Set(gadgets.map(gadget => gadget.category) || '')];
    const filteredGadgets = (activeCategory === 'All Product' ? gadgets : gadgets.filter(gadget => gadget.category === activeCategory));
    return (
        <div className='mb-8'>
            <h3 className='text-5xl text-center my-8 text-bold'>Explore Cutting-Edge Gadgets</h3>
            <div className='flex gap-8 items-start'>
                <div className='flex flex-col gap-2'>
                    {
                        uniqueCategories.map(category => <CategoryButton
                            text={category}
                            onClick={() => handleActiveClick(category)}
                            isActive={category === activeCategory}
                        >
                        </CategoryButton>)
                    }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        filteredGadgets.map(gadget => <Gadget gadget={gadget}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;