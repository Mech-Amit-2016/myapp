import './App.css';
import './components/AddItem';
import AddItem from './components/AddItem';
import AllItems from './components/AllItems';
// import FindItem from './components/FindItem';

function App() {
  return (
    <div className="App">
      <AddItem/>
      <AllItems/>
      {/* <FindItem/> */}
    </div>
  );
}

export default App;
