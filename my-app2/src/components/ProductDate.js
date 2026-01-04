import React from 'react';
import './ProductDate.css'
import Card from './Card'

function ProductDate(params){
    const dateObj = new Date(params.date);
    const day = dateObj.toLocaleString('en-US',{day: '2-digit'});
    const month = dateObj.toLocaleString('en-US',{month: 'short'});
    const year = dateObj.getFullYear();
    return (
        <Card className = 'productDate'>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </Card>
    );
}

export default ProductDate