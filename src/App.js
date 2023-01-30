import './App.css';


function Button({val}){
  return (
    <div>
      <button className='button'>{val}</button>
    </div>
  );
}

function App() {
  return (
    <div className="body">
      <div className='displaySection'></div>

      <div className='buttonsSection'>
        <Button val='/'/>
        <Button val={9}/>
        <Button val={8}/>
        <Button val={7}/>
        <Button val='*'/>
        <Button val={6}/>
        <Button val={5}/>
        <Button val={4}/>
        <Button val='-'/>
        <Button val={3}/>
        <Button val={2}/>
        <Button val={1}/>
        <Button val='+'/>
        <Button val='='/>
        <Button val={0}/>
        <Button val='clr'/>
      </div>
    </div>
  );
}

export default App;
