import React from "react";

function PageContainer(props){

    const centerContainer = {
        width: "80%",
        minHeight: "100vh",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return(
        <div style={centerContainer}>
            {props.children}
        </div>
    )
}

export default PageContainer;