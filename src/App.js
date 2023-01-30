import './App.css';
import { useState } from 'react';

function Button({val, onclick}){
  return (
    <div>
      <button onClick={onclick} className='button'>{val}</button>
    </div>
  );
}

function Display({disp}){
  return (
    <div className='displaySection'>
        <input value={disp} type={'text'}/>
      </div>
  );
}


export default function App() {
  const [disp, setDisp] = useState('0');
  const [num1, setNum1] = useState(0);
  const [operator, setOpe] = useState('');
  const [isClick, setClick] = useState(false);
  const [isAnswered, setAnswered] = useState(false);

  const showNumber = (e) =>{
    e.preventDefault();
    let oldValue;
    let current = disp + " ";
    if(isClick){
      oldValue = current.replace(/[-error0+*/ ]/g, "");
    } else{
      oldValue = current.replace(/[0error ]/g, "");
    }
    let newValue = e.target.innerHTML;
    let finalDisp = oldValue + newValue; 
    setDisp(finalDisp);
    setAnswered(false);
  }

  const showOperator = (e) =>{
    e.preventDefault();
    if(!isClick){
      let num = parseFloat(disp);
      setNum1(num);
      let op = e.target.innerHTML;
      setDisp(op);
      setOpe(op);
      setClick(true);
      setAnswered(false);
    }
  }

  const compute = (e) => {
    if (!isAnswered){
      setClick(false);
      let num2 = parseFloat(disp);
      let ans;
      if(operator === '*'){
        ans = num1 * num2;
      } else if(operator === '/'){
        ans = num1 / num2;
      } else if(operator === '+'){
        ans = num1 + num2;
      } else if(operator === '-'){
        ans = num1 - num2;
      }

      if(!isFinite(ans) || isNaN(ans)){
        setDisp('error');
        setAnswered(true);
      } else {
        setDisp("nasan po yung offboarding form?");
        setAnswered(true);
      }
    }
  }

  const clearDisplay = () => {
    setDisp('0');
    setClick(false);
    setNum1(0);
  }

  return (
    <div className="body">

      <Display disp={disp}/>
      
      <div className='buttonsSection'>
        <Button val='/' onclick={showOperator}/>
        <Button val={'9'} onclick={showNumber}/>
        <Button val={'8'} onclick={showNumber}/>
        <Button val={'7'} onclick={showNumber}/>
        <Button val='*' onclick={showOperator}/>
        <Button val={'6'} onclick={showNumber}/>
        <Button val={'5'} onclick={showNumber}/>
        <Button val={'4'} onclick={showNumber}/>
        <Button val='-' onclick={showOperator}/>
        <Button val={'3'} onclick={showNumber}/>
        <Button val={'2'} onclick={showNumber}/>
        <Button val={'1'} onclick={showNumber}/>
        <Button val='+' onclick={showOperator}/>
        <Button val='=' onclick={compute}/>
        <Button val={'0'} onclick={showNumber}/>
        <Button val='clr' onclick={clearDisplay}/>
      </div>
    </div>
  );
}


