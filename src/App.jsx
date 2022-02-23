import React, { useState } from 'react';

import ToggleBtn from './components/ToggleBtn';

import './styles.scss';

export default function App() {

    const [light, setLight] = useState(false);

    return (
    
        <div className={light ? 'fullPage light' : 'fullPage dark'}>
            {/* <ToggleBtn 
                light={light}
                setLight={setLight}
            /> */}
        </div>
        
        );
};