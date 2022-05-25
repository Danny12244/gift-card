import Card from './components/card'
import './App.css';
import data from './components/data.json'

function App() {
  return (
    <div className="App">
    <Card data={data}/>
    </div>
  );
}

export default App;
