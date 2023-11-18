import React from "react";
import "./App.css"; // Import your base CSS file
import FormComponent from "./FormComponent";
import ComicComponent from "./ComicComponent";

function App() {
  return (
    <div className="App">
      <h1>Generate Pictures from Text</h1>
      <FormComponent />
      <ComicComponent />
    </div>
  );
}

export default App;
