import { useState } from "react";

function useRandomColor() {
    const [color, setColors] = useState(["#ffa500", "#fa8072", "#adff2f", "#7fffd4"]);

    const getRandomColor = () => {
        const randomNumber = Math.floor(Math.random() * color.length);
        return color[randomNumber];
    };

    return [setColors, getRandomColor];
}

export default useRandomColor;
