import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/main";
import Table from "./table/table";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);
  const archivedNotes = []

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      category: "",
      lastModified: Date.now(),
      dates: ""
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onArchiveNote = (noteId) => {
    let noteToArchive = notes[notes.findIndex(note => note.id === noteId)]
    archivedNotes.push(noteToArchive)

    localStorage.setItem("archived", JSON.stringify(archivedNotes));
    setNotes(notes.filter(({ id }) => id !== noteId))
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
      <Table
        notes={notes}
        onArchiveNote={onArchiveNote}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        archivedNotes={archivedNotes}
      />
    </div>
  );
}

export default App;