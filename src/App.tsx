import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <p>Study Buddy</p>
                <p>Kevin's Account Information</p>
            </div>
            <div className="body">
                <div className="map">
                    <img className="map-img" src="/UTMap.png" alt="utmap" />
                </div>
                <div className="locations">
                    <p>Locations</p>
                    <div className="userLocation">
                        <p>Your Location</p>
                    </div>
                    <div className="buddyLocations">
                        <p>Buddy Locations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
