import { useState } from "react";

function CounterFunc() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const newIncrement = () => {
    setCounter(counter + 5);
  };

  const descIncrement = () => {
    setCounter(counter - 5);
  };

  return (
    <div className="col-md-6 border-end">
      <h2>Functional component</h2>
      <h1>{counter}</h1>
      <button className="btn btn-primary me-3" onClick={decrement}>
        -
      </button>
      <button className="btn btn-primary" onClick={increment}>
        +
      </button>

      <div>
        <button className="btn btn-primary mt-4 me-4" onClick={newIncrement}>
          newIncrement
        </button>
        <button className="btn btn-primary mt-4" onClick={descIncrement}>
          DescIncrement
        </button>
      </div>
    </div>
  );
}

export default CounterFunc;

// <div>
//   <h1>Realtime Clock</h1>
//   <h2>{clock}</h2>
// </div>

// {pertemuan 1 react}
// <div className="container">
//   <div className="text-center my-3">
//     <h1>React JS</h1>
//   </div>
//   <hr />
//   <div className="row text-center">
//     <CounterFunc />
//     <CounterClass />
//   </div>
// </div>
