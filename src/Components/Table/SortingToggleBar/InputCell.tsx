import React from "react";

import TableCell from '@mui/material/TableCell';



type StateFormats<T> = {
    value:T,
    setfunc:(value:T) => void
}

const StringInputCell = ({value,setfunc}:StateFormats<string>) => {
    return(
        <TableCell align="center">
            <input 
                type="text" 
                value={value} 
                onChange={(e) => {setfunc(e.target.value)}} 
                placeholder="" 
            />
        </TableCell>
    )
}

export default StringInputCell;