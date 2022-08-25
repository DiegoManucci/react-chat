import React, {useEffect, useRef} from "react";

function Input({innerRef, type, focus, placeholder, handleOnChange, className}){

    const inputRef = useRef(null);

    useEffect(() => {

        innerRef = inputRef;

        if(focus) {
            inputRef.current.focus();
        }

    },[]);

    return(
        <input 
            ref={inputRef}
            type={type} 
            placeholder={placeholder} 
            onChange={handleOnChange} 
            className={className}
        />
    )
}

export default Input;