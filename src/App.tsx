import React from 'react';
import randomInt from './utils/randomInt';


export default function App() {
    const a = randomInt(1, 10);
    const b = randomInt(1, 10);
    const c = a * b;
    return (
        <>
            {a} * {b} = {c}
        </>
    );
}
