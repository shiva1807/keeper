import React,{useState} from "react";

function CreateArea(props) {

    const [note,createNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event)
    {
        const {name,value}=event.target;
        createNote(prevVal=>{
            return {...prevVal,
            [name]:value
            };
        })
    }

    function submit(event){
        props.addNote(note);
        event.preventDefault();
        createNote({
            title:"",
            content:""
        })
    }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
