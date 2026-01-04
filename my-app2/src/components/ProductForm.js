import { useState } from 'react';
import './ProductForm.css';
import BlueButton from './BlueButton';

function ProductForm(props) {

  const [fullProductInput, setFullProductInput] = useState({
    title:'',
    date:''
  });

  // const [newTitle, setTitle] = useState('');
  // const [newDate, setDate] = useState('');

  function titleChangeHandler(event){
    // setTitle(event.target.value);
    setFullProductInput( (prevState) => {
      return { ...prevState , title : event.target.value};
    } );
  }

  function dateChangeHandler (event){
    // setDate(event.target.value)
    setFullProductInput((prevState) => {
      return { ...prevState, date : event.target.value};
    });
  }

  function submitHandler(e){
    e.preventDefault();

    const productData = {
      title : fullProductInput.title,
      date : fullProductInput.date
    }

    // setTitle('');
    // setDate('');

    props.saveProduct(productData);;

    setFullProductInput({
      title : '',
      date : ''
    });

  }


  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={fullProductInput.title} onChange={titleChangeHandler}/>
      </div>

      <div className="form-control">
        <label>Date</label>
        <input type="date" value={fullProductInput.date} min="2025-01-01" max="2025-12-12"onChange={dateChangeHandler}/>
      </div>

      <div className="form-actions">
        <BlueButton type="submit">Add Product</BlueButton>
      </div>
    </form>
  );
}

export default ProductForm;