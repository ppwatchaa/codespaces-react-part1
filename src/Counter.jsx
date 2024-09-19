import { useState } from "react";
export default function Counter(){
    const [count,setCount]=useState(0);
    const [value,setvalue]=useState("Typed here!");
    return(<>
        <input type="text"
            value={value}
            onChange={e=>setvalue(e.target.value)}
        />
        <h3>You Typed {value.length} chars</h3>
        <button onClick={() => setCount(count+1)}>
            Click me!</button>
        <p>You Clicked{count} times</p>
    </>);
}