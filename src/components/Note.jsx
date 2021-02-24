import React from "react";

function Note(props){
    function deleteThisNote(event){
        props.deleteNote(props.id)
        event.preventDefault();
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteThisNote} >DELETE</button>
        </div>
    )
}
 export default Note;