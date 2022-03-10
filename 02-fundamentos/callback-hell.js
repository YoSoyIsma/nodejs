const empleados = [
    {
        id: 1,
        nombre: "Fernando" 
    },
    {
        id: 2,
        nombre: "Karen" 
    },
    {
        id: 3,
        nombre: "Ismael" 
    }
];

const salario = [
    {
        id: 1,
        salario: 1000 
    },
    {
        id: 2,
        salario: 2000 
    }
];

const getEmpleado = (id, callback) =>{

        const empleado = empleados.find( (e) =>e.id === id )
        if(empleado){
            callback (null, empleado);
        } else{
            callback (`El empleado con id ${id} no existe`);
        }
}

// console.log(getEmpleado(5));

getEmpleado(1, (err, empleado) =>{
    if(err){
        console.log("Error!");
        return console.log(err);
    }
    console.log("Empleado Existe!");
    console.log(empleado);
})