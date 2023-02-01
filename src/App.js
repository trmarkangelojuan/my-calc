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

  const [disp, setDisp] = useState('');
  const [num1, setNum1] = useState(0);
  const [operation, setOper] = useState('');
  const [isClicked, setClick] = useState(false);
  
  const showNumber = (e) =>{
    e.preventDefault();
    let oldValue, newValue;
    if(isClicked){
      oldValue = '';
      setClick(false);
    } else {
      oldValue = disp;
    }
    newValue = e.target.innerHTML;
    setDisp(parseInt(oldValue + newValue));
  }

  const showOperator = (e) =>{
    e.preventDefault();

    if(!isClicked){
      if (disp === ''){
        setDisp('');
      } else {
        let op = e.target.innerHTML;
        setNum1(disp);
        setOper(op);
        setDisp(op);
      }
      setClick(true);
    } else if(isClicked){
      if (disp === ''){
        setDisp('');
      } else {
        let op = e.target.innerHTML;
        setOper(op);
        setDisp(op);
      }
    }
  }

  const compute = () => {

    if(num1 !== 0 || operation !== ''){
      if (!isClicked){
        let num, num2, ans;
        num2 = parseFloat(disp);
        num = parseFloat(num1);
        
        if(operation === '*'){
          ans =  num * num2;
        } else if(operation === '/'){
          ans = num / num2;
        } else if(operation === '+'){
          ans = num + num2;
        } else if(operation === '-'){
          ans = num - num2;
        }
        setDisp(parseFloat(ans));
      }
    }
  }

  const clearDisplay = () => {
    setDisp('');
    setNum1(0);
    setOper('');
    setClick(false);
  }

  //var arr = ["/", "9", "8", "7", "*" ,"6", "5", "4", "-","3","2","1", "+", "=", "0", "clr"];    
    
  return (
    <div className="body">

      <Display disp={disp}/>
      
      <div className='buttonsSection'>
        <Button val='/' onclick={showOperator}/>
        <Button val='9' onclick={showNumber}/>
        <Button val='8' onclick={showNumber}/>
        <Button val='7' onclick={showNumber}/>
        <Button val='*' onclick={showOperator}/>
        <Button val='6' onclick={showNumber}/>
        <Button val='5' onclick={showNumber}/>
        <Button val='4' onclick={showNumber}/>
        <Button val='-' onclick={showOperator}/>
        <Button val='3' onclick={showNumber}/>
        <Button val='2' onclick={showNumber}/>
        <Button val='1' onclick={showNumber}/>
        <Button val='+' onclick={showOperator}/>
        <Button val='=' onclick={compute}/>
        <Button val='0' onclick={showNumber}/>
        <Button val='clr' onclick={clearDisplay}/>
      </div>
    </div>
  );
}


