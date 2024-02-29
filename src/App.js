import MainScreen from '../src/Components/MainScreen'
import './App.css';
import SecondCard from '../src/Components/SecondCard';
import ThirdCard from '../src/Components/ThirdCard';
function App() {
  return (
    <div className="App">
      <MainScreen />
      <SecondCard/>
      <ThirdCard/>
    </div>
  );
}

export default App;
