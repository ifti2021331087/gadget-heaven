import React from 'react';
import './CategoryButton.css'
const CategoryButton = ({ text, onClick, isActive }) => {
    return (
        <button
           className={`btn ${isActive?'active':''}`}
           onClick={onClick}
        >
            {text}
        </button>
    );
};

export default CategoryButton;