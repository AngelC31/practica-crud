
const CrudTable = ({ data }) => {
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length === 0 ? (
                            <tr>
                                <td colSpan="3">No existen elementos</td>
                            </tr>
                        ) : (
                            data.map(item=>(
                            <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td><button>Editar</button><button>Eliminar</button></td>
                            </tr>
                            )
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default CrudTable;