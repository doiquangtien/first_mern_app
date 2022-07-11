import React from "react";
import { getPostRequest } from "./app/slices/postsSlice";
import { HomePage } from "./containers";

function App() {
  console.log(getPostRequest.type);

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
