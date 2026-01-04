import { useState } from 'react';
import './Card.css'


function Card(){

    const [num, setNum] = useState('0')

    function handleDecrement(){
        setNum(prev => prev - 1 );
    }

    function HandleIncrement(){
        setNum( prev => prev + 1);
    }

    function handleReset(){
        setNum(0);
    }


    return (
        <div className='container'>
            <h1 className='heading'>Increment & Decrement</h1>
            <div className='field'>
                <div className='minus' onClick={handleDecrement}>-</div>
                <div className='number'>{num}</div>
                <div className='plus' onClick={HandleIncrement}>+</div>
            </div>
            <button className='btn' onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Card;