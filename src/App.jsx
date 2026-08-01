import { useState } from 'react';
import '../src/styles/App.css'
import Camera from "./components/Camera"

function App() {
  // What the user typed
  const [searchTerm, setSearchTerm] = useState("")
  // Printed Polaroid photos
  const [photos, setPhotos] = useState([])
  // Are we currently talking to API
  const [loading, setLoading] = useState(false);
  // Did something go wrong?
  const [error, setError] = useState("")

  return(
    <div>
      <Camera />
    </div>
  )
}

export default App
