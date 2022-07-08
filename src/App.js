import React, { useState,useEffect } from "react"
import {nanoid} from 'nanoid'
import NotesList from "./components/NotesList"
import Search from "./components/Search"
import Header from "./components/Header"


function App({handleAddNote}){
    const [notes,setNotes]=useState([
        {
            id:nanoid(),
            text:'This is my first note!',
            date:'12/03/2022',
        },
        {
            id:nanoid(),
            text:'This is my second note!',
            date:'15/03/2022',
        }, {
            id:nanoid(),
            text:'This is my third note!',
            date:'18/03/2022',
        },
        {
            id:nanoid(),
            text:'This is my my note!',
            date:'21/03/2022',
        },
    ])
    const [searchText,setSearchText]=useState('')

    const [darkMode,setDarkMode]=useState(false)

    useEffect(()=>{
        const savedNotes =JSON.parse(
            localStorage.getItem('react-notes-app-data')
        )
        if(savedNotes){
            setNotes(savedNotes)
        }
    },[])

    useEffect(()=>{
        //you need a key&,a value to save your info to local storage
        localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
    },[notes])

    const addNote =(text)=>{
        const date= new Date();
        const newNote ={
            text:text,
            date:date.toLocaleDateString(),
        }
        const newNotes=[...notes,newNote]
        setNotes(newNotes)
    }
    //you need to pass id into the function before you can delete
    const deleteNote = (id) =>{
     const newNotes=notes.filter((note)=> note.id !== id)
     setNotes(newNotes)
    }

    return(
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleToggleDarkMode={setDarkMode}/>
                <Search handleSearchNote={setSearchText}/>
                <NotesList 
                notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
                handleAddNote={addNote}
                handleDeleteNote={deleteNote}/>
            </div>
        </div>
  
        
      
    )

}

export default App