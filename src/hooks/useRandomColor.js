import { useState } from "react";

function useRandomColor() {
    const [color, setColor] = useState(["#ffa500", "#fa8072", "#adff2f", "#7fffd4"]);

    const getRandomColor = () => {
        const randomNumber = Math.floor(Math.random() * color.length);
        return color[randomNumber];
    };

    return [setColor, getRandomColor];
}

export default useRandomColor;
