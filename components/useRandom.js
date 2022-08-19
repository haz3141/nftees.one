import { useEffect } from "react";

const useRandom = () => {
    useEffect(() => {
        // document.querySelectorAll('.grid-background > div')
        // Loop over grid items and create random duration and delay
        document.querySelectorAll('.grid-background > div')
            .forEach((elem) => {
                // Calculate random number for delay
                let delay = getRandomInt(0, 5);
                // Calculate random number for duration
                let duration = getRandomInt(3, 6);
            
                // Set both
                elem.style.animationDelay = `${delay}s`;
                elem.style.animationDuration = `${duration}s`;
            });
        
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
        
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });
}

export default useRandom;