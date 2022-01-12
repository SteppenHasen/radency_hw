const Table = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
    onArchiveNote
  }) => {
    const sortedNotes = notes.filter(note => note.archived === false)
    const regex = new RegExp('[0-9]{2}/[0-9]{2}/[0-9]{4}')
    const categories = ["news", "note", "religion", "emotions", "animals"]
    
    return (
      <div className="app-table">
        <div className="app-table-header">
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
                <div>
                <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                <button onClick={(e) => onArchiveNote(id)}>Archive</button>
                </div>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <div className="note-meta">
                <small>
                  Last Modified: {" "}
                  {new Date(lastModified).toLocaleDateString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
                <small>Category: {category}</small>
                <small>Dates: {" "}
                {regex.exec(body)}
                </small>
              </div>
            </div>
          ))}
        </div>
        <div className="app-table-footer">
          <div className="app-table-categories">
            {categories.map(e => (
              <div className="app-categories-point">
                <p>{e}</p>
                <span>Active:{sortedNotes.filter(note => note.category === e).length}</span>
                <span>Archived:{notes.filter(note => note.category === e && note.archived === true).length}</span>
              </div>
            ))}
          </div> 
        </div>
      </div>
    );
  };
  
  export default Table;