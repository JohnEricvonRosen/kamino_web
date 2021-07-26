import React, {useState, useEffect} from "react" 

import Datadisplay from "./Datadisplay"

function Zach() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})

    useEffect (() => { //ComponentDidMount
        setLoading(true)
        const apiURL = "http://127.0.0.1:8000/api/1"
        fetch(apiURL)
            .then((r) => r.json())
            .then((response) => {
                console.log(response)
                setData(response)
                setLoading(false)
            })
    }, [])
    
    return(
        <div>
            {loading ? <h1>Loading</h1> : <Datadisplay data={data}/>}
            <h2>Gnome-shaped dildo store: </h2>
            <p>Doesn't look like it should work, but it do.</p>
            <label>Gnome's finest dildo</label>
            <br/>
            <img src={"../static/images/gnome.jpg"} alt="Gnome Dildo"></img>
            <p>"You can trust him with your butthole!"</p>
        </div>
    )
}

export default Zach