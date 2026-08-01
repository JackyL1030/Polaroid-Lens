export default function PhotoDisplay({ photos }) {
  return (
    <>
      {photos.map((photo) => (
        <div className="polaroid" key={photo.id}>
          <img src={photo.urls.small} />
        </div>
      ))}
    </>
  );
}
