import React from 'react';
import './List.css';

function List (props) {
    return (
      <ol>
        {
          props.toDo.map((item, index) =>
            !item.editable ?
            <li className = 'list' key = {index}>
                <div className = {item.done ? 'itemDone' : 'item'}>
                    {index + 1 + '. ' + item.item}
                </div>
                <div>
                    <button className = 'button' onClick = {() => props.deleteItem(index)}>Delete</button>
                    <button className = 'button' onClick = {() => props.editItem(index)}>Edit</button>
                    <input className = 'checkbox' type = 'checkbox' onClick = {() => props.doneItem(index)}/>(check if done)
                </div>
            </li>
            :
            <li className = 'list' key = {index}>
                <input className = 'input' value = {props.value} onChange = {props.onChange}/>
                <div>
                    <button className = 'button' onClick = {() => props.saveItem(index)}>Save</button>
                </div>
            </li>
          )
        }
      </ol>
    )
}

export default List;