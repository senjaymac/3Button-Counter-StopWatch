import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogPicture: React.FC = () => {
  const [dogUrl, setDogUrl] = useState<string>('');

  const fetchDog = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogUrl(response.data.message);
    } catch (error) {
      console.error('Error fetching dog:', error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div>
      {dogUrl && <img src={dogUrl} alt="Random dog" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />}
      <br />
      <button onClick={fetchDog}>New Dog</button>
    </div>
  );
};

export default DogPicture;