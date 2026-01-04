import './App.css'
import { useState } from 'react';
import { testimonials } from "./components/Data";
import Card from './components/Card';

function App() {

  const[index, setIndex] = useState(0);

  const data = testimonials[index];

  const n = testimonials.length;

  // prevPerson, nextPerson, surpriseMe

  function prevPerson(){
    setIndex((prev) => (prev-1 + n)%n);
  }

  function nextPerson(){
    setIndex((prev) => (prev+1)%n);
  }

  function surpriseMe(){
    let randomIndex = Math.floor(Math.random()*n);
    if(index === randomIndex) randomIndex = (randomIndex + 1)%n;
    setIndex(randomIndex);
  }


  return (
    <div className='bg-gray-200 h-screen flex flex-col justify-center items-center'>
      <div className='text-black text-4xl font-bold mb-1.5'>Our Testimonials</div>
      <div className='bg-violet-500 h-1 w-44 mb-20'></div>
      <Card Data = {data} prevPerson={prevPerson} nextPerson={nextPerson} surpriseMe={surpriseMe}></Card>
    </div>
  )
}

export default App
