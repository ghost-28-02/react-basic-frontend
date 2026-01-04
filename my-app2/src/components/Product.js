import { useState } from 'react';
import './Product.css'
import Card from './Card'
import ProductItems from './ProductItems'
import NewProduct from './NewProduct';

function Product(params) {

    const [products, setProducts] = useState(params.items)

    function printProductData(newProduct) {
        setProducts((prevProducts) => {
            return [...prevProducts , newProduct]
        });
    };

    return (
        <Card className = 'product rotating-border'>
            {products.map((item) => (
                <ProductItems
                    title={item.title}
                    date={item.date}
                />
            ))}
            <NewProduct printProduct = {printProductData}/>
        </Card>
    );
}

export default Product;