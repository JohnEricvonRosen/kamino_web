import React from "react"

function Datadisplay(props) {
    return(
        <div>
            <ul>
                {Object.keys(props.data).map((item, index) => {
                    return (<li key={index}>{item}: {props.data[item]}</li>)
                })}
            </ul>
        </div>
    )
}

export default Datadisplay