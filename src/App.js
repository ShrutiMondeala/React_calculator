import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { calculateNewValue } from '@testing-library/user-event/dist/utils';

function App() {
  
const arr= ()=>{
  const arr1=[];
  // for(let i=1;i<10;i++){
  //     arr1.push(
  //       <button onClick= {()=> updateCalc(i.toString)} key={i}>{i}</button>
  //     )
  // }
  return arr1
}

const [calc, setCalc] = useState("");
const [result, setresult] = useState("");
const ops = ['/','+','-','*','.'];

const updateCalc=(value)=>{  
  console.log(calc);
    if(ops.includes(value) && calc ===" " || ops.includes(value) && ops.includes(calc.slice(-1)))
      return;
      setCalc(calc+value);  
      if(!ops.includes(value)){
        setresult(eval(calc + value).toString());
      } 
}
  const calculate= ()=>{
    setCalc(eval(calc).toString());
  }

  const Delete =()=>{
    if(calc == ' '){
          return;
    }

    const value = calc.slice(0,-1);
    setCalc(value);
  }
  return (
    <div className="App">
      <div className="calculator"> 
      <div className="display">
        {result ? <span>({result})</span>: ' '}&nbsp;&nbsp;
        {calc || "0"}
      </div>
      
       
      <div className="operators">
        <button onClick= {()=> updateCalc('+')}>+</button>
        <button onClick= {()=> updateCalc('-')}>-</button>
        <button onClick= {()=> updateCalc('*')}>*</button>
        <button onClick= {()=> updateCalc('/')}>/</button>
        <button onClick={Delete}>Del</button>
      </div>
            <div className="numbers">
              <button onClick= {()=> updateCalc('9')}>9</button>
              <button onClick= {()=> updateCalc('8')}>8</button>
              <button onClick= {()=> updateCalc('7')}>7</button>
              <button onClick= {()=> updateCalc('6')}>6</button>
              <button onClick= {()=> updateCalc('5')}>5</button>
              <button onClick= {()=> updateCalc('4')}>4</button>
              <button onClick= {()=> updateCalc('4')}>3</button>
              <button onClick= {()=> updateCalc('2')}>2</button>
              <button onClick= {()=> updateCalc('1')}>1</button>
              
              <button onClick= {()=> updateCalc('0')}>0</button>
              <button onClick= {()=> updateCalc('.')}>.</button>
              <button onClick={calculate}>=</button>
              
            </div>
      </div>
    </div>
  );
}

export default App;
