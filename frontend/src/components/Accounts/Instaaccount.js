import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axiosInstance from "../axios"
import CircularProgress from '@material-ui/core/CircularProgress';
import Datadisplay from "../Zach/Datadisplay";

function Instaacount (){
    const { slug } = useParams()
    const [loading, updateLoading] = useState(true)
    const [data, updateData] = useState({})
    useEffect(()=>{
        updateLoading(true)
        axiosInstance.get('/accounts/'+slug)
            .then((res)=>{
                console.log(res['data'])
                updateData(res['data'])
                updateLoading(false)
            })
    },[])
    return(
        <div>
            {loading ? <CircularProgress/>: <Datadisplay data={data}/>}
        </div>
    )
}

export default Instaacount