import React, {useState,useEffect} from 'react';
import randomInt from './utils/randomInt';


const NUMBER_ANSWERS = 4;


export default function App() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [answers, setAnswers] = useState(new Set<number>());

    function generate() {
        const a = randomInt(1, 10);
        const b = randomInt(1, 10);
        const tempAnswers = new Set<number>([a * b]);
        while (tempAnswers.size < NUMBER_ANSWERS) {
            tempAnswers.add(randomInt(1, 81));
        }
        setA(a);
        setB(b);
        setAnswers(tempAnswers);
    }
    useEffect(generate,[]);
    function selectAnswer(answer: number) {

    }

    return (
        <>
            <p>
                {A} * {B} =
                {Array.from(answers).map((answer) => <button onClick={() => selectAnswer(answer)}>{answer}</button>)}
            </p>
            <button onClick={generate}>
                Новый пример
            </button>
        </>
    );
}
