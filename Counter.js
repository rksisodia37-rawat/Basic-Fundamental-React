import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(prevVal => prevVal + 1);
    const decrease = () => setCount(prevVal => prevVal - 1);
    const reset =() => setCount(0);


    return (
        <div style={{textAlign: 'center'}}>
            <h2>Count :{count}</h2>
            <button onClick={increase}  >Increase</button>
            <button onClick={decrease}  style={{marginLeft: '10px'}}>Decrease</button>
            <button onClick={reset} style={{marginLeft: '10px'}}>Reset</button>


        </div>

    );


}
export default Counter;