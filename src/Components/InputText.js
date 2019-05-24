import React from 'react';
import './InputText.css';

function InputText(props) {
    return (
      <div>
        <p className = 'text'>Add new position to the list:</p>
        <input className = 'input' value = {props.value} onChange = {props.onChange}/>
        <button className = 'addButton' onClick = {() => props.addItem()}>Add item</button>
      </div>
    )
}

export default InputText;