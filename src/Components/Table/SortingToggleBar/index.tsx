import React,{Dispatch, SetStateAction, useState} from "react";

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


import './index.css';
import useSorting, {options,Bools} from "../../Hooks/UseSorting";
import StringInputCell from "./InputCell";
import { DataStructure } from "../../Hooks/UseAllAlerts";
import useFiltering from "../../Hooks/UseFiltering";

type SortingToggleBarProps ={
    toggle:Boolean,
    rows:DataStructure[],
    setAlerts:Dispatch<SetStateAction<DataStructure[]>>,
    
}

const SortingToggleBar = ({
        toggle,
        rows,
        setAlerts
    }:SortingToggleBarProps) => {
    

    const {
        sortingOptions,
        SortBySeverity,
        SortByUrgency,
        SortByResponse,
        SortByType,
        SortByEventName
    } = useSorting(rows,setAlerts);

    const {
        filteringInputs,
        FilterByHeadline,
        FilterByEventName,
        FilterByAuthority,
        FilterByInstructions,
    } = useFiltering(rows,setAlerts);
    
    if(!toggle){
        return(<></>);
    }

    

    return(
        <>
            <TableRow id="Search">
                <StringInputCell value={filteringInputs.headline} setfunc={FilterByHeadline}/>
                <StringInputCell value={filteringInputs.eventName} setfunc={FilterByEventName}/>
                <StringInputCell value={filteringInputs.authority} setfunc={FilterByAuthority}/>
                <StringInputCell value={filteringInputs.instructions} setfunc={FilterByInstructions}/>
                <TableCell align="center">No Filter</TableCell>
                <TableCell align="center">No Filter</TableCell>
                <TableCell align="center">No Filter</TableCell>
                <TableCell align="center">No Filter</TableCell>
            </TableRow>

           <TableRow id="Ordering">
                <TableCell align="center">No Ordering on Headlines</TableCell>
                        <TableCell align="center" onClick={SortByEventName}> 
                            {sortingOptions.eventName===options.HighFirst? "^\n" : 
                                (sortingOptions.eventName===options.LowFirst? "⌄\n" :"") }
                                </TableCell>
                        <TableCell align="center">No Ordering on Authority</TableCell>
                        <TableCell align="center">No Ordering on Instructions</TableCell>
                        <TableCell align="center" onClick={SortByType}>
                        {sortingOptions.type===options.HighFirst? "^\n" : 
                                (sortingOptions.type===options.LowFirst? "⌄\n" :"") }
                            </TableCell>
                        <TableCell align="center" onClick={SortByResponse}>
                        {sortingOptions.response===options.HighFirst? "^\n" : 
                                (sortingOptions.response===options.LowFirst? "⌄\n" :"") }
                            </TableCell>
                        <TableCell align="center" onClick={SortByUrgency}>
                        {sortingOptions.urgency===options.HighFirst? "^\n" : 
                                (sortingOptions.urgency===options.LowFirst? "⌄\n" :"") }
                            </TableCell>
                        <TableCell align="center" onClick={SortBySeverity}>
                        {sortingOptions.severity===options.HighFirst? "^\n" : 
                                (sortingOptions.severity===options.LowFirst? "⌄\n" :"") }
                            </TableCell>
                    </TableRow>
        
        </>
    )
}

export default SortingToggleBar;