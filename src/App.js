import MainScreen from '../src/Components/MainScreen'
import './App.css';
import SecondCard from '../src/Components/SecondCard';
import ThirdCard from '../src/Components/ThirdCard';
import FourthCard from './Components/FourthCard';
import FifthCard from './Components/FifthCard';
import ClientSlider from './Components/Slider';
function App() {
  return (
    <div className="App">
      <MainScreen />
      <SecondCard/> 
       <ThirdCard/>
      <FourthCard/>
      <FifthCard/>
      <ClientSlider/>
  
    </div>
  );
}

export default App;
