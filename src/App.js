import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Button from './components/Button/button';
import Counter from "./components/Counter/counter";
import Input from "./components/Input/input";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

function App() {
  const [increaseBy, setIncreaseBy] = useState(0)
  const counter = useSelector(state => state)

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: INCREMENT, payload: increaseBy})
  }
  const decrement = () => {
    dispatch({type: DECREMENT})
  }

  const isDisabled = counter === 0 && true;

  return (
    <div className="App">
      <Counter />
      <Input setIncreaseBy={setIncreaseBy}/>
      <Button text='Increment' click={increment} />
      <Button text='Decrement' click={decrement} isDisabled={isDisabled}/>
    </div>
  );
}

export default App;
