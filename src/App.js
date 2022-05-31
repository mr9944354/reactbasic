import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';

function App() {
   const itemtopost=['PHONE','TV','LAPTOP','PC','HEADPHONES']

  return (
    <div className="App">
        Hi;
        <HomePage itemtopost={itemtopost}/>
        
    </div>
  );
}

export default App;
