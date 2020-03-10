import React, { useState } from 'react';
import calculate from './calculator'

const CalculatorComponent = () => {

  const [a, setA] = useState()
  const [b, setB] = useState()
  const [operator, setOperator] = useState()
  const [result, setResult] = useState()
  const [errorMessage, setErrorMessage] = useState()

  const [operatorItems] = React.useState([
    { label: "", value: "" },
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "/", value: "/" },
    { label: "*", value: "*" }
  ]);

  const performCalculation = (e) => {
    e.preventDefault()
    setErrorMessage('')
    try {
       setResult(calculate(Number(a), operator, Number(b)))  
    } catch (error) {
       setErrorMessage(error.message)
    }    
  }

  return (
    <form onSubmit={performCalculation}>

      <div>

        <input type="text" name="a" data-testid="a" size="4" value={a} onChange={e=>setA(e.target.value)} />

        <select onChange={e=>setOperator(e.target.value)}>
          {operatorItems.map(item => (
            <option key={item.value} value={item.value} >{item.label}</option>
          ))}
        </select>

        <input type="text" name="b" data-testid="b" size="4" value={b} onChange={e=>setB(e.target.value)} />

        <input type="submit" value="=" data-testid="submit"/>

        <input type="text" size="6" data-testid="result" readOnly="readOnly" name="res" value={result} />    

      </div>

      {errorMessage}

    </form>
  )

}

export default CalculatorComponent
