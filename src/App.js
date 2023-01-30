import './App.css';
import { useState } from 'react';

function Button({val, onclick}){
  return (
    <div>
      <button onClick={onclick} className='button'>{val}</button>
    </div>
  );
}

function Display({val}){
  return (
    <div className='displaySection'>
        <input value={val} type={'text'}/>
      </div>
  );
}


function App() {
  const [value, setVal] = useState('');

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setVal(value);
  };

  
  return (
    <div className="body">

      <Display val={value}/>
      
      <div className='buttonsSection'>
        <Button val='/' onclick={numberClickHandler}/>
        <Button val={9} onclick={numberClickHandler}/>
        <Button val={8} onclick={numberClickHandler}/>
        <Button val={7} onclick={numberClickHandler}/>
        <Button val='*' onclick={numberClickHandler}/>
        <Button val={6} onclick={numberClickHandler}/>
        <Button val={5} onclick={numberClickHandler}/>
        <Button val={4} onclick={numberClickHandler}/>
        <Button val='-' onclick={numberClickHandler}/>
        <Button val={3} onclick={numberClickHandler}/>
        <Button val={2} onclick={numberClickHandler}/>
        <Button val={1} onclick={numberClickHandler}/>
        <Button val='+' onclick={numberClickHandler}/>
        <Button val='=' onclick={numberClickHandler}/>
        <Button val={0} onclick={numberClickHandler}/>
        <Button val='clr' onclick={numberClickHandler}/>
      </div>
    </div>
  );
}

export default App;
