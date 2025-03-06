import React, { Dispatch, SetStateAction } from "react";
import useAllAlerts, {DataStructure} from "./Components/Hooks/UseAllAlerts";
import Table from "./Components/Table";
import { Button } from "@mui/material";


type AlertResult = {
    alerts : DataStructure[],
    setAlerts: Dispatch<SetStateAction<DataStructure[]>>,
    resetAlertsToggle:Boolean,
    setResetAlertsToggle:Dispatch<SetStateAction<Boolean>>
}

const App = () => {
    const {alerts,setAlerts,resetAlertsToggle,setResetAlertsToggle}:AlertResult  = useAllAlerts()
    
    return (
        <div>
            <Button onClick={()=> setResetAlertsToggle(!resetAlertsToggle)}>Reset</Button>
            <Table rows={alerts} setAlerts={setAlerts}/>
        </div>
    )
}

export default App;