import React from "react";

const SingleColor = ({ color, updateColor }) => {

    return (
        <div
            className="allColors"
            style={{backgroundColor: `#${color.hex}`}}
            onClick={() => updateColor(color)}
        >
            <p>{color.name}</p>


        </div>
    );
};


export default SingleColor;