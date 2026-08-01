import ViewFinder from "./ViewFinder";
import Lens from "./Lens";
import SearchInput from "./SearchInput";
import ShutterButton from "./ShutterButton";

import "../styles/Camera.css";

export default function Camera({ searchTerm, dispatch, onTakePhoto, loading }) {
  return (
    <div className="camera">
      <div className="camera-title">Polaroid Lens</div>
      <ViewFinder loading={loading}/>
      <Lens />
      <SearchInput searchTerm={searchTerm} dispatch={dispatch} />
      <ShutterButton onTakePhoto={onTakePhoto} />
    </div>
  );
}
