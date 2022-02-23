import { useState } from 'react';

import './toggleBtn.scss';

export default function ToggleBtn({ light, setLight }) {


    function handleClick() {
        setLight(!light);
    };

    return (
        <div className={light ? 'container dark' : 'container light'}
            onClick={handleClick}
        >
            <div className={light ? 'round right' : 'round left'}></div>
        </div>
    )

}