import { useState } from "react";
import axios from "axios"

const UploadForm = () => {
    const [titre, setTitre] = useState('')
    const [description, setDescription] = useState('')
    const [fichier, setFichier] = useState(null)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titre || !description || !fichier) {
        setMessage("Vous devez remplir tous les champs et le fichier");
        return;
    }

    const formData = new FormData();
    formData.append('title', titre);
    formData.append('description', description);
    formData.append('file', fichier);

    try {
        const res = await axios.post('http://localhost:5000/api/files', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        setMessage("Fichier envoyé avec succès");
        setTitre("");
        setDescription("");
        setFichier(null);
    } catch (error) {
        console.error("Erreur lors de l'envoi :", error);
        setMessage("Erreur lors de l'envoi");
    }
};



    return ( 
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="text" placeholder="Titre" value={titre} onChange={(e) => setTitre(e.target.value)} required />
            <br />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <br />
            <input type="file" onChange={(e) => setFichier(e.target.files[0])} required />
            <button type="submit">Envoyer</button>
            <p>{message}</p>
        </form>
     );
}
 
export default UploadForm;