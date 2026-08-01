import ViewFinder from "./ViewFinder";
import Lens from "./Lens";
import SearchInput from "./SearchInput";
import ShutterButton from "./ShutterButton";
import PhotoDisplay from "./PhotoDisplay";

import "../styles/Camera.css";

export default function Camera({ searchTerm, setSearchTerm }) {
  return (
    <div className="camera">
      <div className="camera-title">Polaroid Lens</div>
      <ViewFinder />
      <Lens />
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ShutterButton />
      <PhotoDisplay />
    </div>
  );
}
