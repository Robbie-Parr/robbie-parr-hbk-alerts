import React from "react";
import useAllAlerts, {DataStructure} from "./Components/Hooks/UseAllAlerts";
import Table from "./Components/Table";

const App = () => {
    const value : DataStructure[]  = useAllAlerts()
    
    return (
        <div>
            <Table rows={[...value]}/>
        </div>
    )
}

export default App;