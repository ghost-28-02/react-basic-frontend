import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // useEffect( () => {
  //   console.log("UI Rendering Done");
    
  // })

  // useEffect( () => {
  //   console.log("UI Rendering Done");
    
  // },[]);

  // useEffect(() => {
  //   console.log("Change Observed");
  // },[text])

  // useEffect(() => {
  //   console.log("Listner Added");

  //   return () => {
  //     console.log("Listner Removed");
  //   }
  // },[text])


  // function changeHandler(event){
  //   setText(event.target.value); 
  //   console.log(text);
  // }

  // useEffect( () => {

  //   function handleResize(){
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   }

  //   window.addEventListener('resize',handleResize);

  //   return ()=> {
  //     window.removeEventListener('resize',handleResize);
  //   }
  // })
  
  return (
    // <div className="App">
    //   <div>Window Width {'->'} {windowSize.width}px</div>
    //   <div>Window Height {'->'} {windowSize.height}px</div>
    // </div>

    <div>
      
    </div>
  );
}

export default App;
