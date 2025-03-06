import React, {useEffect, useState} from 'react';


const useAlertById = (id:string) => {
    const [alert,setAlert] = useState();

    useEffect(()=> {
        fetch("https://api.weather.gov/alerts/"+id).then(
            (res) => {console.log(res)}
        )
    },[])

    return alert;
}


export default useAlertById;