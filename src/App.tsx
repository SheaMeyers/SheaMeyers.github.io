import React from 'react';
import './App.css';
import photo from './personal_photo.jpeg';

const App: React.FC = () => {
  return (
    <div>
      <div className="Top-bar">
        <a className="Link" href="https://www.linkedin.com/in/sheameyers/">LinkedIn</a>
        <a className="Link" href="https://github.com/SheaMeyers">Github</a>
      </div>
      <img src={photo} alt="logo" />
      <div>
        This is my personal website
      </div>
    </div>
  );
};

export default App;
