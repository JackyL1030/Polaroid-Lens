import '../styles/PolaroidCard.css'

export default function PolaroidCard({photo}){
    return(
        <div className="polaroid">
          <img src={photo.urls.small} alt="Polaroid photo" />
        </div>
    )
}