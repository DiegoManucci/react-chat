import React from "react";

function PageContainer(props){

    const pageContainer = {
        width: "80%",
        minHeight: "100vh",
        margin: "0 auto",
    }

    return(
        <div style={pageContainer}>
            {props.children}
        </div>
    )
}

export default PageContainer;