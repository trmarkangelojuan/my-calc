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

function DisplayOpe({disp2}){
  return (
    <div className='displaySection'>
      <input value={disp2} type={'text'}/>
    </div>
  );
}


export default function App() {
  const [disp, setDisp] = useState('0');
  const [disp2, setDisp2] = useState('');
  const [showOpe, setShowOpe] = useState(false);
  const [showNum, setShowNum] = useState(true);
  const [num1, setNum1] = useState(0);
  const [operator, setOpe] = useState('');
  const [isClick, setClick] = useState(false);
  const [isAnswered, setAnswered] = useState(false);
  const [isZero, setZero] = useState(true);
  const [isRepeat, setRepeat] = useState(false);

  const showNumber = (e) =>{
    e.preventDefault();
    let oldValue, newValue;

    if(isClick){
      setShowNum(true);
      setShowOpe(false);
    } 
    
    if (isZero){
      oldValue = parseInt(disp);
      newValue = parseInt(e.target.innerHTML);
      if(newValue == 0){
        setZero(true);
      } else {
        setZero(false);
      }
    } else {
      oldValue = disp;
      newValue = e.target.innerHTML;
    }
    
    setDisp(oldValue + newValue);
    console.log(oldValue + newValue);
  }

  const showOperator = (e) =>{
    e.preventDefault();
    let op = e.target.innerHTML;
    
    if(!isClick){
      setClick(true);
      let num = disp;
      setNum1(num);
      setDisp2(op);
      setOpe(op);
      setDisp('0');
      setZero(true);
      setShowNum(false);
      setShowOpe(true);
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
      
      setDisp(parseFloat(ans));
      setAnswered(true);
      setRepeat(true);
    }
  }

  const clearDisplay = () => {
    setDisp('0');
    setClick(false);
    setNum1(0);
    setZero(true);
    setShowNum(true);
    setShowOpe(false);
    setOpe('');
    setAnswered(false);
    setDisp2('');
  }


  //var arr = ["/", "9", "8", "7", "*" ,"6", "5", "4", "-","3","2","1", "+", "=", "0", "clr"];    
    
  return (
    <div className="body">

      {showNum && <Display disp={disp}/>}
      
      {showOpe && <DisplayOpe disp2={disp2}/>}

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


