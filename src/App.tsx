import React from 'react';
import './App.css';
import photo from './personal_photo.jpeg';

const App: React.FC = () => {
  return (
    <div className="App-body">
      <div className="Header-bar">
          <div className="Header-bar-div">
            <a className="Link" href="https://www.linkedin.com/in/sheameyers/">LinkedIn</a>
          </div>
          <div className="Header-bar-div">
              <a className="Link" href="https://github.com/SheaMeyers">Github</a>
          </div>
      </div>
      <div className="Main-body">
          <img className="Photo" src={photo} alt="logo" />
          <div className="Main-body-text">
              <h3>About Me</h3>
              <p>Hello, my name is Shea Meyers and I am a full stack web developer.</p>
              <p>My programming interested are primarily related to ReactJS, NodeJS, and Python/Django</p>
          </div>
      </div>
    </div>
  );
};

export default App;
