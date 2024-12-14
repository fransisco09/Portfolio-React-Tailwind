import { useState } from 'react';
import './App.css';
import ActiveSlider from './components/ActiveSlider';
import Home from './section/Home/Home';

function App() {
    return (
        <>
            <Home />    
            <ActiveSlider />
        </>
    );
}

export default App;
