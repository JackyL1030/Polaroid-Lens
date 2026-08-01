import { useEffect, useState, useReducer } from "react";
import { searchPhotos } from "./services/unsplashService";
import Camera from "./components/Camera";
import { cameraReducer, initialState } from "./reducers/cameraReducer";
import "../src/styles/App.css";

function App() {
  const [state,dispatch] = useReducer(
    cameraReducer, initialState
  )

  useEffect(() => {
    searchPhotos("sunset");
  }, []);

  return (
    <div>
      <Camera searchTerm={state.searchTerm} dispatch={dispatch} />
      <p>{state.searchTerm}</p>
    </div>
  );
}

export default App;
