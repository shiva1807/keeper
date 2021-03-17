import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note";
import CreateArea from "./CreateArea"


function App(){

    const [noteArr,createNoteArr]=useState([]);

    function addNote(note){
        createNoteArr(prevVal=>{
            return [...prevVal,note];
        });
    }

    function deleteNote(id){
        return createNoteArr(prevVal=>
            prevVal.filter(
                (note,index)=> {
                    return index!=id;
                }
            )
            )
    }


    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {noteArr.map((note,index) =>{ return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />})}
            <Footer />
        </div>
    );
}

export default App;