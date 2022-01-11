const Table = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
    onArchiveNote,
    archivedNotes
  }) => {
    const sortedNotes = notes
    const regex = new RegExp('[0-9]{2}/[0-9]{2}/[0-9]{4}')
    const categories = ["news", "note", "religion", "emotions", "animals"]
    
    return (
      <div className="app-table">
        <div className="app-table-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-table-notes">
          {sortedNotes.map(({ id, title, body, lastModified, category }, i) => (
            <div
              className={`app-table-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="table-note-title">
                <strong>{title}</strong>
                <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                <button onClick={(e) => onArchiveNote(id)}>Archive</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified: {" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
              <small className="note-meta">Category: {category}</small>
              <small className="note-meta">Dates: {" "}
              {regex.exec(body)}
              </small>
            </div>
          ))}
        </div>
        <div className="app-table-footer">
          <div className="app-table-categories">
            {categories.map(e => (
              <div>
                <p>{e}</p>
                <span>Active:{sortedNotes.filter(note => note.category === e).length}</span>
                <span>Archived:{archivedNotes.filter(note => note.category === e).length}</span>
              </div>
            ))}
          </div> 
        </div>
      </div>
    );
  };
  
  export default Table;