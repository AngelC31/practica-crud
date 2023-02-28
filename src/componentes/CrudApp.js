import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb=[
    {
        id:0,
        nombre:'Angel',
        apellido:'Cruh'
    },
    {
        id:1,
        nombre:'Juan',
        apellido:'Soza'
    },
]
const CrudApp=()=>{
    const [db, setDb]=useState(initialDb)
    const [dataToEdit,setDataToEdit]=useState(null)
    const createData=(data)=>{
        data.id=initialDb.length;
        //console.log(data)
        setDb([...db,data])
    };
    const updateData=(data)=>{};
    const deleteData=(id)=>{};
    return(
        <div>
            <h1>CRUD App</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
            <CrudTable data={db} setDataToEdit={setDataToEdit} delete={deleteData}/>
        </div>
    )
}
export default CrudApp;