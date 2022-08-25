import React, {useEffect, useRef} from "react";

function Form(props){

    return(
        <form
            ref={props.innerRef}
            onSubmit={props.handleOnSubmit}
            className={props.className}
        >
            <h1>{props.label}</h1>
            {props.children}
        </form>
    )
}

export default Form;