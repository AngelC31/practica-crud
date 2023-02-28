import { useState } from "react"

const initialForm={
    id:null,
    nombre:'',
    apellido:''
}

const CrudForm=()=>{
    const[form,setForm]=useState(initialForm)

    const handleChance=(e)=>{
        //console.log(e.target.nombre +""+e.target.value)
        setForm({
            ...form,
            [e.target.nombre]:e.target.value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.nombre || !form.apellido){
            alert('Datos incompletos')
            return;
        }
        if(form.id===null){
            create(form)
        }
        else{
            update(form)
        }
        handleReset();
    }
    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }
    return(
        <div>
            <h3>Crear</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' name='nombre' placeholder='Nombre' onChange={handleChance}/>
                <input type='text' name='apellido' placeholder='Apellido' onChange={handleChance}/>
                <input type='submit' value='Enviar' onClick={handleSubmit}/>
                <input type='reset' value='Limpiar' onClick={handleReset}/>
            </form>
        </div>
    )
}
export default CrudForm;