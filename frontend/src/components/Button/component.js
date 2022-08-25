import React, {useEffect, useRef} from "react";
import styles from "./style.module.css";

function Button({innerRef, type, label, handleOnClick, className = styles.rectangleButton}){

    return(
        <button
            ref={innerRef}
            type={type}
            className={className}
            onClick={handleOnClick}
        >
            {label}
        </button>
    )
}

export default Button;