import React, { useState } from "react"; // Fixed import
import './ExAnimation.css';

function AnimatedText() {
    const [onClick, setOnClick] = useState(false);

    return (
        <div className="AnimatedText">
            <h1 className={onClick ? "text" : "text animated"}>
                Hello, World!
            </h1>
            <div id="AnimateBTn" className="AnimateBtn">
                <button onClick={() => setOnClick(!onClick)}>
                    Toggle Animation
                </button>
            </div>
        </div>
    );
}
export default AnimatedText;