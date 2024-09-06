import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import ImageCarousel from './ImageCarousel'; // Assume you create this as shown below
import InformationDivs from './InformationDiv'; // Assume you create this as shown below

const App = () => {
    const [selectedTask, setSelectedTask] = useState('');

    const handleTaskSelection = (task) => {
        setSelectedTask(task);
    };

    return (
        <div className="container">
            
            <div className="button-container">
                <button onClick={() => handleTaskSelection('Task 1')}>Task 1</button>
                <button onClick={() => handleTaskSelection('Task 2')}>Task 2</button>
                <button onClick={() => handleTaskSelection('Task 3')}>Task 3</button>
            </div>
            <ImageCarousel />
            <InformationDivs />
            {selectedTask && <h2>You selected: {selectedTask}</h2>}
        </div>
    );
};

export default App;
