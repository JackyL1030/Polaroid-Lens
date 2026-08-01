export default function PhotoDisplay({ photos }) {
  console.log(photos);

  return (
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.urls.small} />
      ))}
    </div>
  );
}
