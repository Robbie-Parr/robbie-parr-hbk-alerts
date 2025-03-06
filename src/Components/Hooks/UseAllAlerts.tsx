import {useEffect, useState} from 'react';



type DataResult = {
    id:string,
    headline:string,
    instruction:string,
    response:string,
    urgency:string,
    messageType:string,
    severity:string,
    ends:Date,
    event:string,
    senderName:string,
} 

const useAllAlerts = () => {
    const [alerts,setAlerts] = useState<DataResult[]>([]);
    const [resetAlertsToggle,setResetAlertsToggle] = useState<Boolean>(false);
    useEffect(()=> {
        fetch("https://api.weather.gov/alerts").then(
            (res) => res.json()).then(res=> res.features).then(
                res => res.reduce((pre : DataResult[],value: { properties: DataResult; }) => {
                    const data: DataResult = {
                        id:value.properties.id,
                        headline:value.properties.headline,
                        instruction:value.properties.instruction,
                        response:value.properties.response,
                        urgency:value.properties.urgency,
                        messageType:value.properties.messageType,
                        severity:value.properties.severity,
                        ends:new Date(value.properties.ends),
                        event:value.properties.event,
                        senderName:value.properties.senderName,

                    };
                    if(data.event!="Test Message"){
                        pre.push(data);
                    }
                    return (pre);
                    
                },[])
            ).then(
                    (value:DataResult[]) => {
                    setAlerts(value)
                    }
            )
            
        
    },[resetAlertsToggle])
    
    return {alerts,setAlerts,resetAlertsToggle,setResetAlertsToggle};
}


export default useAllAlerts;

export type {DataResult as DataStructure};