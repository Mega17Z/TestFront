import { useState } from "react"
import UploadForm from "./components/UploadForm"
import FileList from "./components/FileList"
import { useEffect } from "react"
import axios from "axios"

function App() {
  const [fichiers, setFichiers] = useState([])

  useEffect(() => {
    const fetchFiles = async() => {
      try {
        const res = await axios.get("http://localhost:5000/api/files")
        setFichiers(res.data)
      } catch(error) {
        console.log("erreur lors de la reccuperation", error)
      }
    }

    fetchFiles()
  }, [fichiers])

  return (
    <>
      <div>
        <h1>Ajouter un fichiers</h1>
        <UploadForm />
        <hr />
        <h4>Les Fichiers Ajouter</h4>
        <div style={{}}>
          <FileList fichiers={fichiers} />
        </div>
      </div>      
    </>
  )
}

export default App
