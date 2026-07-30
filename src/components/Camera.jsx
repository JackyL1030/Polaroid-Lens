import Lens from "./Lens"
import PhotoDisplay from "./PhotoDisplay"
import SearchInput from "./SearchInput"
import ShutterButton from "./ShutterButton"

export default function Camera() {
  return (
    <div>
      <div>Camera Component</div>
      <Lens />
      <PhotoDisplay />
      <SearchInput />
      <ShutterButton />
    </div>
  );
}
