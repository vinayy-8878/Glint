import MainScreen from '../src/Components/MainScreen'
import './App.css';
import SecondCard from '../src/Components/SecondCard';
import ThirdCard from '../src/Components/ThirdCard';
import FourthCard from './Components/FourthCard';
import FifthCard from './Components/FifthCard';
import FormScreen from "./Components/FormScreen"
import SliderMainScreen from './Components/SliderMainScreen';
function App() {
  return (
    <div className="App">
      <MainScreen />
      <SecondCard/> 
       <ThirdCard/>
      <FourthCard/>
      <FifthCard/>
      <SliderMainScreen/>
     <FormScreen/>
    </div>
  );
}

export default App;
