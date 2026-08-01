import '../styles/ShutterButton.css'

export default function ShutterButton({onTakePhoto}){
    return(
        <button className="shutter-button" onClick={onTakePhoto}>
            TAKE PHOTO
        </button>
    )
}