// App.jsx or wherever you need the loading screen
import React, { useState } from 'react';
import EducationalLoadingScreen from './components/EducationalLodaingScreen/EducationalLoadingScreen';
import './App.css';
function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  if (showLoading) {
    return (
      <EducationalLoadingScreen 
        onComplete={() => {
          setShowLoading(false);
          setShowVideo(true);
        }}
      />
    );
  }

  return (
    <div>
      {showVideo && (
          <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/fDAOImre32s?controls=1&modestbranding=1&rel=0&iv_load_policy=3"
          title="STEM Learning Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

export default App;