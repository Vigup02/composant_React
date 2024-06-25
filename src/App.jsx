// src/App.jsx
import React from 'react';
import './App.css';
import Image1 from './components/vig.jpg';
import Image2 from './components/Cécile.PNG';
import Image3 from './components/Ellipse.png';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        name="Vig" 
        profileImage={Image1} 
        isOnline={true} 
      />
      <Contact 
        name="Cécile" 
        profileImage={Image2}  
        isOnline={false} 
      />
      <Contact 
        name="Paul" 
        profileImage={Image3}  
        isOnline={false} 
      />
    </div>
  );
}

export default App;