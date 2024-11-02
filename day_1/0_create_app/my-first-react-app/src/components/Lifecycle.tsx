import React, { useEffect, useState } from 'react';

export const Lifecycle: React.FC = () => {
    const [count, setCount] = useState(0);
    const computedCount = count * 2;

    console.log('Component rendered');

    useEffect(() => {
        console.log('Component mounted');

        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component updated');
    });

    return (
        <div>
            <h1>Lifecycle Component</h1>
            <p>Count: {count}</p>
            <p>ComputedCount: {computedCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};