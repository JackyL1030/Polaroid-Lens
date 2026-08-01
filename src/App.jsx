import { useEffect, useReducer } from "react";
import { searchPhotos } from "./services/unsplashService";
import Camera from "./components/Camera";
import { cameraReducer, initialState } from "./reducers/cameraReducer";
import "../src/styles/App.css";

function App() {
  const [state, dispatch] = useReducer(cameraReducer, initialState);

  return (
    <div>
      <Camera searchTerm={state.searchTerm} dispatch={dispatch} />
      <p>{state.searchTerm}</p>
    </div>
  );
}

export default App;
