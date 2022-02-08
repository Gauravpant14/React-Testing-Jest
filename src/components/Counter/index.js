import { useState } from "react";

export default function Counter() {
    const [count,setCount] = useState(0);
    function increment() {
        setCount((p) => p+1)
    }
    function decrement() {
        setCount((p) => p-1)
    }
    return (
        <div>
            <p>
                Count: <span data-testid="count">{count}</span>
            </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}