import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };


  return (
    <main className="counter">
      <h1>Counter App</h1>
      <div className="counter_text">{counter}</div>

      <div className="btn">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </main>
  );
}

export default App;
