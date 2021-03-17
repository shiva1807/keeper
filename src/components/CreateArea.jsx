import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [dec,setDec]=useState(false);

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

    function handleExpansion(){
      setDec(true);
    }

  return (
    <div>
      <form className="create-note">
     { dec?
        <input name="title" onChange={handleChange} placeholder="Title" value={note.title} />
        :null}
      
        <textarea name="content"  onClick={handleExpansion} onChange={handleChange} placeholder="Take a note..." rows={dec?3:1} value={note.content} />
        
        <Zoom in={dec}>
        <Fab onClick={submit}><AddIcon /></Fab>
        </Zoom>
      
        
      </form>
    </div>
  );
}

export default CreateArea;
