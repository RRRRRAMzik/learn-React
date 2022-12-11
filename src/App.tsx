import React, {useState, useEffect} from 'react';
import randomInt from './utils/randomInt';


const NUMBER_ANSWERS = 4;


export default function App() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [answers, setAnswers] = useState(new Set<number>());
    const [message, setMessage] = useState('');

    function generate() {
        const a = randomInt(1, 10);
        const b = randomInt(1, 10);
        const tempAnswers = new Set<number>();
        const correctAnswerPosition = randomInt(0, NUMBER_ANSWERS - 1);
        while (tempAnswers.size < NUMBER_ANSWERS) {
            if (tempAnswers.size === correctAnswerPosition) {
                tempAnswers.add(a * b);
            } else {
                tempAnswers.add(randomInt(1, 81));
            }
        }
        setA(a);
        setB(b);
        setAnswers(tempAnswers);
    }

    useEffect(generate, []);

    function selectAnswer(answer: number) {
        if (answer == A * B) {
            setMessage('');
            generate();
        } else {
            setMessage('Wrong answer, try again!');
        }
    }

    return (
        <>
            <p>
                {A} * {B} =
                {Array.from(answers).map((answer) => <button onClick={() => selectAnswer(answer)}>{answer}</button>)}
            </p>
            <p>{message}</p>
            <button onClick={generate}>
                Новый пример
            </button>
        </>
    );
}
