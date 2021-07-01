import React from "react"

function Datadisplay(props) {
    return(
        <div>
            <ul>
                {Object.keys(props.data).map((item) => {
                    return (<li>{item}: {props.data[item]}</li>)
                })}
            </ul>
        </div>
    )
}

export default Datadisplay