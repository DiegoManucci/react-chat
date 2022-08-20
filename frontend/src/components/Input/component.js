import React from "react";

function Input({innerRef, type, placeholder, handleOnChange, className}){
    return(
        <input 
            ref={innerRef}
            type={type} 
            placeholder={placeholder} 
            onChange={handleOnChange} 
            className={className}
        />
    )
}

export default Input;