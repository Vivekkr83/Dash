import React, { useState } from "react";
import "./App.css"; // Import your base CSS file
import FormComponent from "./FormComponent";
import ComicComponent from "./ComicComponent";

function App() {
  const [imageUrls, setImageUrls] = useState({
    1 : "yourfilenamehere.png",
    2 : "yourfilenamehere.png",
    3 : "yourfilenamehere.png",
    4 : "yourfilenamehere.png",
    5 : "yourfilenamehere.png",
    6 : "yourfilenamehere.png",
    7 : "yourfilenamehere.png",
    8 : "yourfilenamehere.png",
    9 : "yourfilenamehere.png",
    10 : "yourfilenamehere.png",
  });
  return (
    <div className="App">
      <h1>Generate Pictures from Text</h1>
      <FormComponent setImageUrls={setImageUrls} imageUrls={imageUrls}/>
      <ComicComponent imageUrls={imageUrls}/>
    </div>
  );
}

export default App;
