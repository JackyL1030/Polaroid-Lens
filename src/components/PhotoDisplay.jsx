import PolaroidCard from "./PolaroidCard";

export default function PhotoDisplay({ photos }) {
  return (
    <>
      {photos.map((photo) => (
        <PolaroidCard key={photo.id} photo={photo} />
      ))}
    </>
  );
}
