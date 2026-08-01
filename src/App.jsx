import { useReducer } from "react";
import { searchPhotos } from "./services/unsplashService";
import Camera from "./components/Camera";
import PhotoDisplay from "./components/PhotoDisplay";
import { cameraReducer, initialState } from "./reducers/cameraReducer";
import "../src/styles/App.css";

function App() {
  const [state, dispatch] = useReducer(cameraReducer, initialState);

  async function handleTakePhoto() {
    if (!state.searchTerm.trim()) {
      return;
    }
    try {
      dispatch({
        type: "SEARCH_STARTED",
      });
      const photos = await searchPhotos(state.searchTerm);
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <div className="app-container">
      <Camera
        searchTerm={state.searchTerm}
        dispatch={dispatch}
        onTakePhoto={handleTakePhoto}
        photos={state.photos}
        loading={state.loading}
      />
      <PhotoDisplay photos={state.photos} />
    </div>
  );
}

export default App;
