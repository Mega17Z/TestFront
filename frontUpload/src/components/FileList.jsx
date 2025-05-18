const FileList = ({fichiers}) => {
    if (fichiers.length === 0) return <p>Aucun fichier encore envoyé</p>

    return (
        <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center'}}>
            {fichiers.map((fichier) => (
                <div key={fichier.id} style={{background: 'whitesmoke', color: 'black', padding: '10px', minWidth: '300px'}}>
                    <h3>{fichier.title}</h3>
                    <p>{fichier.description}</p>
                    <small>{new Date(fichier.createdAt).toLocaleString()}</small><br />
                    <a
                        href={`http://localhost:5000/uploads/${fichier.filename}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >Download</a>
                </div>
            ))}
        </div>
     );
}
 
export default FileList;