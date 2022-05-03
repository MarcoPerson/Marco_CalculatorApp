import React, { useState } from 'react';

function Calculator(props) {
    const [val, setVal] = useState("");

    const calculate = () => {
        try {
            setVal(eval(val));
        } catch (error) {
            setVal("Error");
        }
    }

    const backspace = () => {
        try {
            setVal(val.substring(0, val.length-1));
        } catch (error) {
            setVal("");
        }
    }

    return (
        <div>
            <div className="container shadow mt-4 pt-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 text-center text-primary fw-bolder">
                            Marco Calculator
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-12">
                        <div className='card border-primary border-0 shadow mb-3'>
                            <div className="card-body text-primary">
                                <input autoFocus type="text" onChange={(e) => setVal(e.target.value)} name="" className='form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow' value={val} />
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={1} onClick={(e) => setVal(val + e.target.value)}>1</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={2} onClick={(e) => setVal(val + e.target.value)}>2</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={3} onClick={(e) => setVal(val + e.target.value)}>3</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary px-2 py-4 fs-4 shadow" value={4} onClick={(e) => backspace()}>C/CE</button>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={4} onClick={(e) => setVal(val + e.target.value)}>4</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={5} onClick={(e) => setVal(val + e.target.value)}>5</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={6} onClick={(e) => setVal(val + e.target.value)}>6</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={"+"} onClick={(e) => setVal(val + e.target.value)}>+</button>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={7} onClick={(e) => setVal(val + e.target.value)}>7</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={8} onClick={(e) => setVal(val + e.target.value)}>8</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={9} onClick={(e) => setVal(val + e.target.value)}>9</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={"*"} onClick={(e) => setVal(val + e.target.value)}>X</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={"."} onClick={(e) => setVal(val + e.target.value)}>.</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={0} onClick={(e) => setVal(val + e.target.value)}>0</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={"="} onClick={(e) => calculate()}>=</button>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-light text-primary p-4 fs-4 shadow" value={"/"} onClick={(e) => setVal(val + e.target.value)}>/</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;