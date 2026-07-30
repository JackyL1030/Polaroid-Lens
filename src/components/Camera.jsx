import Lens from "./Lens";
import SearchInput from "./SearchInput";
import ShutterButton from "./ShutterButton";
import PhotoDisplay from "./PhotoDisplay";

export default function Camera() {
  return (
    <div className="camera">
      <div className="camera-title">Polaroid Lens</div>
      <ViewFinder />
      <Lens />
      <SearchInput />
      <ShutterButton />
      <PhotoDisplay />
    </div>
  );
}
