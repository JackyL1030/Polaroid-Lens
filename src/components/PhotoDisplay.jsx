import PolaroidCard from "./PolaroidCard";
import "../styles/PhotoDisplay.css";

export default function PhotoDisplay({ photos }) {
  return (
    <div className="photo-display">
      {photos.map((photo) => (
        <PolaroidCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
