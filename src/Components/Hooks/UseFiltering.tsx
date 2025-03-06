import {Dispatch, SetStateAction, useEffect, useState} from 'react';


import {DataStructure} from "../Hooks/UseAllAlerts";

type Inputs = {
    headline:string,
    eventName:string,
    authority:string,
    instructions:string,
}

const useFiltering = (data: DataStructure[],setAlerts:Dispatch<SetStateAction<DataStructure[]>>) => {
    const [filteringInputs,setFilteringInputs] = useState<Inputs>({
        headline:"",
        eventName:"",
        authority:"",
        instructions:"",
       
    })


    useEffect(()=> {
        if(filteringInputs.headline!=""){
            const regex = new RegExp(filteringInputs.headline, 'i');
            setAlerts(data.filter((value)=> 
                regex.test(value.headline)
            ))
        }

        if(filteringInputs.eventName!=""){
            const regex = new RegExp(filteringInputs.eventName, 'i');
            setAlerts(data.filter((value)=> 
                regex.test(value.event)
            ))
        }

        if(filteringInputs.authority!=""){
            const regex = new RegExp(filteringInputs.authority, 'i');
            setAlerts(data.filter((value)=> 
                regex.test(value.senderName)
            ))
        }

        if(filteringInputs.instructions!=""){
            const regex = new RegExp(filteringInputs.instructions, 'i');
            setAlerts(data.filter((value)=> 
                regex.test(value.instruction)
            ))
        }

    },[filteringInputs])

    
    const FilterByHeadline = (value:string) => {
        FilterBy("headline",value.trimStart())
    }

    const FilterByEventName = (value:string) => {
        FilterBy("eventName",value.trimStart())
    }

    const FilterByAuthority = (value:string) => {
        FilterBy("authority",value.trimStart())
    }

    const FilterByInstructions = (value:string) => {
        FilterBy("instructions",value.trimStart())
    }

    const FilterBy = (filterField:string,substring:string) => {
        setFilteringInputs({...filteringInputs,[filterField]:substring})
        

    }

    

    return {
        filteringInputs,
        FilterByHeadline,
        FilterByEventName,
        FilterByAuthority,
        FilterByInstructions,
    };
}

export default useFiltering;