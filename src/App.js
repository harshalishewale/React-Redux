import { useSelector,useDispatch } from 'react-redux';
import {Increment,Decrement} from './actions/index'
import './App.css';

function App() {
  const myState=useSelector((state)=>state.changeNum);
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h2>Increment / Decrement Counter</h2>
     <div id='main'>
     <div className='box' onClick={()=>dispatch(Increment())}><p>+</p></div>
     <div className='box' id="value"><p>{myState}</p></div>
     <div className='box' onClick={()=>dispatch(Decrement())}><p>-</p></div>
    </div>
    </div>
  );
}

export default App;
