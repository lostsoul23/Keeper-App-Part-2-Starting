import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

// console.log(notes);

function App() {
  return (
    <div>
      <Header />
      {/* <Note title="This is the note title" content="This is the note content" /> // Hard coding values */}
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      ;
      <Footer />
    </div>
  );
}

export default App;
