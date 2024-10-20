
import { useState } from 'react';
export default function Player({initialName , symbol, isActive ,onChangeName}){
    const [playerName ,setPlayerName] = useState(initialName); //state declare

    const [isEditing, setIsEditing] = useState(false);   //state declare

// be clear with naming 
    function handleClick(){
        setIsEditing((editing) => !editing );  // using fn u will be always be working with latest available state
        // setEditing(!isEditing) schedule a state update to true
        if(isEditing){
        onChangeName(symbol,playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
 
    let editablePlayerName = <span className="player-name">{playerName}</span>

    if(isEditing){
        editablePlayerName = (
        <input type="text" required value={playerName} onChange={handleChange} />  //onChnage event in react is a tool for handling user input in real-time
        //btnCaption = 'Save';
        );
    }

    return(
        <li className={isActive? 'active' : undefined}> {/*list*/}
          <span className="player">
            {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'} </button>
        </li>
    )
}