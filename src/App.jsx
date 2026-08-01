import { useReducer } from "react";
import { searchPhotos } from "./services/unsplashService";
import Camera from "./components/Camera";
import PhotoDisplay from "./components/PhotoDisplay";
import { cameraReducer, initialState } from "./reducers/cameraReducer";
import "../src/styles/App.css";

function App() {
  const [state, dispatch] = useReducer(cameraReducer, initialState);

  async function handleTakePhoto() {
    try {
      dispatch({
        type: "SEARCH_STARTED",
      });
      const photos = await searchPhotos(state.searchTerm);
      dispatch({
        type: "SEARCH_SUCCESS",
        payload: photos,
      });
    } catch (error) {
      dispatch({
        type: "SEARCH_FAILED",
        payload: error.message,
      });
    }
  }

  return (
    <div>
      <Camera
        searchTerm={state.searchTerm}
        dispatch={dispatch}
        onTakePhoto={handleTakePhoto}
        photos={state.photos}
      />
      <PhotoDisplay photos={state.photos} />
    </div>
  );
}

export default App;
