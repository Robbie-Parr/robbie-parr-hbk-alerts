import {useEffect, useState} from 'react';


import {DataStructure} from "../Hooks/UseAllAlerts";

enum options { HighFirst, LowFirst,None};

type Bools = {
    severity:options,
    urgency:options,
    response:options,
    type:options,
    eventName:options,
}

const useSorting = (data: DataStructure[]) => {
    const [sortingOptions,setSortingOptions] = useState<Bools>({
        severity:options.None,
        urgency:options.None,
        response:options.None,
        type:options.None,
        eventName:options.None,
    })

    const sortingValues = new Map<string,number>()
    sortingValues.set("Extreme",4)
    sortingValues.set("Severe",3)
    sortingValues.set("Moderate",2)
    sortingValues.set("Minor",1)
    sortingValues.set("Unknown",0)

    sortingValues.set("Future",4)
    sortingValues.set("Expected",3)
    sortingValues.set("Immediate",2)
    sortingValues.set("Past",1)

    sortingValues.set("Avoid",4)
    sortingValues.set("Execute",3)
    sortingValues.set("Monitor",2)
    sortingValues.set("Prepare",1)
    sortingValues.set("AllClear",0)

    sortingValues.set("Alert",2)
    sortingValues.set("Update",1)
    sortingValues.set("Cancel",0)

    useEffect(()=> {
        
        switch(sortingOptions?.severity){
            case options.HighFirst: data.sort((a:DataStructure,b:DataStructure) => 
                (sortingValues.get(a.severity) ?? 0) - (sortingValues.get(b.severity) ?? 0))
            break;
            case options.LowFirst: data.sort((a:DataStructure,b:DataStructure) => 
                -1*((sortingValues.get(a.severity) ?? 0) - (sortingValues.get(b.severity)  ?? 0)))
            break
        }

        switch(sortingOptions?.urgency){
            case options.HighFirst: data.sort((a:DataStructure,b:DataStructure) => 
                (sortingValues.get(a.urgency) ?? 0) - (sortingValues.get(b.urgency) ?? 0))
            break;
            case options.LowFirst: data.sort((a:DataStructure,b:DataStructure) => 
                -1*((sortingValues.get(a.urgency) ?? 0) - (sortingValues.get(b.urgency)  ?? 0)))
            break
        }

        switch(sortingOptions?.response){
            case options.HighFirst: data.sort((a:DataStructure,b:DataStructure) => 
                (sortingValues.get(a.response) ?? 0) - (sortingValues.get(b.response) ?? 0))
            break;
            case options.LowFirst: data.sort((a:DataStructure,b:DataStructure) => 
                -1*((sortingValues.get(a.response) ?? 0) - (sortingValues.get(b.response)  ?? 0)))
            break
        }

        switch(sortingOptions?.type){
            case options.HighFirst: data.sort((a:DataStructure,b:DataStructure) => 
                (sortingValues.get(a.messageType) ?? 0) - (sortingValues.get(b.messageType) ?? 0))
            break;
            case options.LowFirst: data.sort((a:DataStructure,b:DataStructure) => 
                -1*((sortingValues.get(a.messageType) ?? 0) - (sortingValues.get(b.messageType)  ?? 0)))
            break
        }

        switch(sortingOptions?.eventName){
            case options.HighFirst: data.sort()
            break;
            case options.LowFirst: data.sort().reverse()
            break
        }

    },[sortingOptions])

    
    const SortBySeverity = () => {
        SortBy(sortingOptions?.severity,"severity")
        
    }

    const SortByUrgency = () => {
        SortBy(sortingOptions?.urgency,"urgency")
    }

    const SortByResponse = () => {
        SortBy(sortingOptions?.response,"response")
    }

    const SortByType = () => {
        SortBy(sortingOptions?.type,"type")
    }
    
    const SortByEventName = () => {
        SortBy(sortingOptions?.eventName,"eventName")
    }

    const SortBy = (param:options,value:string) => {
            switch(param){
                case options.HighFirst:
                    setSortingOptions({...sortingOptions,[value]:options.LowFirst})
                    break
                case options.LowFirst:
                    setSortingOptions({...sortingOptions,[value]:options.None})
                    break
                case options.None:
                    setSortingOptions({...sortingOptions,[value]:options.HighFirst})
                    break
            }

    }

    

    return {data,
        sortingOptions,
        SortBySeverity,
        SortByUrgency,
        SortByResponse,
        SortByType,
        SortByEventName,
    };
}

export default useSorting;
export {options};
export type {Bools};


/*
Filter by Alert Type
Filter by Current Response
Filter by Current Urgency
Sort by Alert Severity (Severe, Moderate, Minor)
*/