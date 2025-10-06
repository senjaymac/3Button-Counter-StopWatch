import { useState, useEffect } from 'react';

function DogPicturePage() {
  const [dogImage, setDogImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="component-section">
      <h2>🐕 Dog Pictures 🐕</h2>
      <div style={{ textAlign: 'center' }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          dogImage && (
            <img 
              src={dogImage} 
              alt="Random dog" 
              style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
            />
          )
        )}
        <div style={{ marginTop: '1rem' }}>
          <button onClick={fetchDogImage} disabled={loading}>
            {loading ? 'Loading...' : 'Get New Dog'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DogPicturePage;