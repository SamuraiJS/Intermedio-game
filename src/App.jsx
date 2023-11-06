import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card.jsx';
import {FaArrowRotateLeft} from 'react-icons/fa6';

function App() {
  const [cartOne, setCartOne] = useState(1);
  const [cartTwo, setCartTwo] = useState(1);
  const [cartThree, setCartThree] = useState(7);
  const [desactive, setDesactive] = useState(true);
  const [flip, setFlip] = useState('');

  function numRandom() {
    let n = Math.floor(Math.random() * 12 + 1);
    return n;
  }

  function verfyEqual(a, b) {
    if (a == b) {
      setDesactive(!desactive);
    } else {
      setDesactive(true)
    }
  }

  function twoBack() {
    let nOne = numRandom();
    let nTwo = numRandom();
    setCartOne(nOne)
    setCartTwo(nTwo)
    verfyEqual(nOne, nTwo);
  }

  useEffect(() => {
    let nOne = numRandom();
    let nTwo = numRandom();
    setCartOne(nOne)
    setCartTwo(nTwo)
    verfyEqual(nOne, nTwo);
  }, []);

  const [result, setResult] = useState('');
  const [view, setView] = useState('');

  function req() {
    let n = numRandom();
    setCartThree(n);
    setFlip('flip');

    if((n > cartOne && n < cartTwo) || (n < cartOne && n > cartTwo)) {
      setResult('Ganaste');
    } else {
      setResult('Perdiste');
    }
    setTimeout(() => {
      setView('view');
    }, 1500);
  }

  function reset() {
    setView('');
    setFlip('');
    let nOne = numRandom();
    let nTwo = numRandom();
    setCartOne(nOne)
    setCartTwo(nTwo)
    verfyEqual(nOne, nTwo);
  }

  return (
    <>
      <h1>Intermedio game</h1>
      <div className="table-game">
        <Card num={cartOne}/>
        <Card num={cartTwo}/>
        <Card num={cartThree} face='down' flip={flip}/>
      </div>
      <div className="buttons">
        <button className="request" onClick={req}>Quiero!</button>
        <button className="not-request" onClick={reset}>Paso!</button>
        <button className="two-back" onClick={twoBack} disabled={desactive}>Dos del lomo!</button>
      </div>
      <div className="container-result">
        <div className={`result ${view}`}>
          <div>{result}</div>
          <button className="reset" onClick={reset}><FaArrowRotateLeft /></button>
        </div>
      </div>
    </>
  )
}

export default App
