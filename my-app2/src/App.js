import './App.css';
import Products from './components/Product';


function App() {
  const products = [
    {
      id: 'p1',
      title: 'Maggi',
      amount: 500,
      date: new Date(2007, 6, 17)
    },
    {
      id: 'p2',
      title: 'Kamlesh',
      amount: 100,
      date: new Date(2004,2,28)
    },
    {
      id: 'p3',
      title: 'Kartik',
      amount: 500,
      date: new Date(2004,1,17)
    },
    {
      id: 'p4',
      title: 'Sumit',
      amount: 500,
      date: new Date(2024,3,1)
    },

  ];
  return (
    <div className='App'>
        <Products items = {products}/>
    </div>
  );
}

export default App;
