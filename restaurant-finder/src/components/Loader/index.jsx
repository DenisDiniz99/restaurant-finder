import React from "react";
import Lottie from 'react-lottie';

import animation from '../../assets/restaurants-loading.json';

export default ()=> {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };

    return <Lottie options={defaultOptions}/>
}