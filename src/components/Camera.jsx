import ViewFinder from "./ViewFinder";
import Lens from "./Lens";
import SearchInput from "./SearchInput";
import ShutterButton from "./ShutterButton";
import PhotoDisplay from "./PhotoDisplay";

import "../styles/Camera.css";

export default function Camera({ searchTerm, dispatch }) {
  return (
    <div className="camera">
      <div className="camera-title">Polaroid Lens</div>
      <ViewFinder />
      <Lens />
      <SearchInput searchTerm={searchTerm} dispatch={dispatch} />
      <ShutterButton />
      <PhotoDisplay />
    </div>
  );
}
