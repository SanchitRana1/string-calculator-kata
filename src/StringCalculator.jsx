import React, { useState } from 'react'
import {add} from './helper/stringCalculator.js'

const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = () => {
        try {
            setError(null); // Clear previous errors
            const sum = add(input);
            setResult(sum);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };
  return (
    <div className="max-h-fit max-w-md mx-auto text-center p-5 bg-[white] shadow-md rounded-lg mt-10">
    <h1 className="text-2xl font-bold mb-4">String Calculator</h1>
    <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number string here"
        className="w-full p-2 border border-gray-300 rounded mb-3"
    />
    <button
        onClick={handleCalculate}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
        Calculate
    </button>
    {result !== null && (
        <h2 className="mt-4 text-xl font-semibold">Result: {result}</h2>
    )}
    {error && (
        <h2 className="mt-4 text-xl text-red-600">Error: {error}</h2>
    )}
</div>
  )
}

export default StringCalculator