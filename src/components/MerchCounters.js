import React, { useState } from 'react';

//Counter component for the merch page. Each merch item and each size counter holds its own state.
//output is just headings and counter buttons that update the state up or down to keep count.

const MerchCounters = () => {

    const [counterS, setCounterS] = useState(0);
    const [counterM, setCounterM] = useState(0);
    const [counterL, setCounterL] = useState(0);
    const [counterXL, setCounterXL] = useState(0);
    const [counter2X, setCounter2X] = useState(0);

    const handleSmall1 = () => {
        setCounterS(counterS + 1)
    }

    const handleSmall2 = () => {
        setCounterS(counterS - 1)
    }


    const handleMed1 = () => {
        setCounterM(counterM + 1)
    }

    const handleMed2 = () => {
        setCounterM(counterM - 1)
    }

    const handleLarge1 = () => {
        setCounterL(counterL + 1)
    }

    const handleLarge2 = () => {
        setCounterL(counterL - 1)
    }

    const handleXL1 = () => {
        setCounterXL(counterXL + 1)
    }

    const handleXL2 = () => {
        setCounterXL(counterXL - 1)
    }

    const handle2X1 = () => {
        setCounter2X(counter2X + 1)
    }

    const handle2X2 = () => {
        setCounter2X(counter2X - 1)
    }

    return (
        <div>
            <h5>Small: {counterS}</h5>
            <button className="btn btn-danger" onClick={handleSmall2}>(-)</button>
            <button className="btn btn-success" onClick={handleSmall1}>(+)</button>
            <br></br>
            <h5>Medium: {counterM}</h5>
            <button className="btn btn-danger" onClick={handleMed2}>(-)</button>
            <button className="btn btn-success" onClick={handleMed1}>(+)</button>
            <br></br>
            <h5>Large: {counterL}</h5>
            <button className="btn btn-danger" onClick={handleLarge2}>(-)</button>
            <button className="btn btn-success" onClick={handleLarge1}>(+)</button>
            <br></br>
            <h5>Extra Large: {counterXL}</h5>
            <button className="btn btn-danger" onClick={handleXL2}>(-)</button>
            <button className="btn btn-success" onClick={handleXL1}>(+)</button>
            <br></br>
            <h5>2X: {counter2X}</h5>
            <button className="btn btn-danger" onClick={handle2X2}>(-)</button>
            <button className="btn btn-success" onClick={handle2X1}>(+)</button>
            <br></br>
        </div>
    );
}


export default MerchCounters;