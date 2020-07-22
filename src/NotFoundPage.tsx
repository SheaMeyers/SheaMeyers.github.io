import React from 'react';
import history from './history';
import HeaderBar from './HeaderBar';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className="Not-found-page">
            <HeaderBar />
            <h2>Lost?</h2>
            <button className="Not-found-page--button" onClick={() => history.push("/")}>
                Click me to go back to the main page
            </button>
        </div>
    );
};

export default NotFoundPage;
