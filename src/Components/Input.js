import React, { useState } from 'react';
import style from './Input.module.css';

function NumberInput () {
  const [number, setNumber] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setNumber(inputValue);
  };

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= number; i++) {
      table.push(
        <tr key={i}>
          <td>{i}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div className={style.container}>
        <h1>Type a Number below to generate the table:</h1>
      <input type="number" value={number} onChange={handleInputChange} placeholder='Enter Number'/>
      <table>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
}

export default NumberInput;
