import classes from './Counter.module.css';
import { useSelector, useDispatch} from 'react-redux';


const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state=> state.counter)
  const show = useSelector(state=> state.showCounter)


  const incrementChangeHandler = () =>{
    dispatch({type: 'increment'})
  }
  
  const decrementChangeHandler = () =>{
    dispatch({type: 'decrement'})
  }

  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementChangeHandler}>Increment</button>
        <button onClick={decrementChangeHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
