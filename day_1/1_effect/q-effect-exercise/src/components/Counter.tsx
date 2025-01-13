import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count=${count}`;
    }, [count]);

    return(
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Current count: {count}</p>
        </>
    );
};

export default Counter;