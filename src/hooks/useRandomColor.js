import { useState } from "react";

function useRandomColor() {
    const [colors, setColors] = useState(["#ffa500", "#fa8072", "#adff2f", "#7fffd4"]);

    const getRandomColor = () => {
        const randomNumber = Math.floor(Math.random() * colors.length);
        return colors[randomNumber];
    };

    return [setColors, getRandomColor];
}

export default useRandomColor;
