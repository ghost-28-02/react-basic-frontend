import { NavLink, Link, Route, Routes } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'
import Labs from './components/Labs'
import NotFound from './components/NotFound'
import Support from './components/Support'
import MainHeader from './components/MainHeader'

function App() {
  return (
    <div className='text-center'>

      <nav className='flex justify-between mx-9 p-4'>
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/support">Support</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
        <div>
          <NavLink to="/labs">Labs</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/labs' element={<Labs/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
