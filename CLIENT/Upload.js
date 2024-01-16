import React from 'react';

const ImageUploader = () => {
  const handleFileChange = async (event) => {
    const selectedFiles = event.target.files;
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('images', selectedFiles[i]);
    }

    try {
      const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Images téléchargées avec succès');
      } else {
        console.error('Erreur lors du téléchargement des images');
      }
    } catch (error) {
      console.error('Erreur réseau lors du téléchargement des images', error);
    }
  };

  return (
    <div>
      <label htmlFor="imageInput">Sélectionnez des images :</label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ImageUploader;
