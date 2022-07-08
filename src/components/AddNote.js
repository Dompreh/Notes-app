import React, {useState} from 'react'

function AddNote({handleAddNote}) {
 const [noteText,setNoteText]=useState('')
 const characterLimit= 300;

 const handleChange=(event)=>{
    if(characterLimit-event.target.value.length >= 0){
      setNoteText(event.target.value)
    }
    
 }
 const handleSaveClick=()=> {
    if(noteText.trim().length > 0){//this prevents user from saving empty spaces
      handleAddNote(noteText)
      setNoteText('')//this clears the textarea after save
    }
   
 }
 
    return (
    <div className='note new'>
        <textarea
         cols='10' 
         rows='8' 
         onChange={handleChange}
         value={noteText}
         placeholder='Type to add a note...'></textarea>
        <div className='notes-footer'>
            <small>{characterLimit -noteText.length} Remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div> 
  )
}

export default AddNote;
