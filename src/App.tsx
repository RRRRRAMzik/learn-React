import React, {useState} from 'react';
import randomInt from './utils/randomInt';


export default function App() {
    const [A, setA] = useState(randomInt(1, 10));
    const [B, setB] = useState(randomInt(1, 10));
    const [C, setC] = useState(A * B);
    function generate() {
        setA(randomInt(1, 10));
        setB(randomInt(1, 10));
        setC(A * B);
    }
    return (
        <>
            <p>
                {A} * {B} = {C}
            </p>
            <button onClick={generate}>
                Новый пример
            </button>
        </>
    );
}
