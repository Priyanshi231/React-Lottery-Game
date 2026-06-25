import './App.css'
import Lottery from './Lottery.jsx';
import { sum } from './helper.js';

function App() {
  let winCondition = (ticket) =>{
      return sum (ticket) === 20;
    }

  return (
    <>
      <Lottery n={4} winCondition={winCondition} />
    </>
  )
}

export default App
