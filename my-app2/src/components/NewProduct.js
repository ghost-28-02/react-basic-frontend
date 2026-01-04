import { useState, useEffect } from 'react'
import './NewProduct.css'
import ProductForm from './ProductForm'
import BlueButton from './BlueButton'

function NewProduct(props){
    const [showForm , setShowForm] = useState(false);

    // Close the form when ESC is pressed
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                setShowForm(false);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        // Cleanup when component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    function toggleForm() {
        setShowForm((prev) => !prev);
    }
    return (
        <div className='newProduct'>
            <BlueButton onClick={toggleForm} >{showForm ? 'Close Form' : 'Add New Product'}</BlueButton>
            {showForm && <ProductForm saveProduct = {props.printProduct} />}
        </div>
    );
}

export default NewProduct;