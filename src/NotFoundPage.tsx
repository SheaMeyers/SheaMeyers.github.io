import React from 'react';
import history from './history';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className="Not-found-page">
            <h1>Lost?</h1>
            <button className="Not-found-page--button" onClick={() => history.push("/")}>
                Click me to go back to the main page
            </button>
        </div>
    );
};

export default NotFoundPage;
