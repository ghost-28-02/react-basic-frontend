import React, {useState} from 'react';
import './ProductItems.css'
import Card from './Card'
import ProductDate from './ProductDate';
import BlueButton from './BlueButton';

function ProductItems(params) {
    const [title, setTitle] = useState(params.title);
    function clickHandler() {
        setTitle('Added');
    }
    return (
        <Card className = 'productItems'>
            <h1>{title}</h1>
            <ProductDate date = {params.date}/>
            <BlueButton className='btn' onClick={clickHandler}>Add to cart</BlueButton>
        </Card>
    );
}

export default ProductItems;