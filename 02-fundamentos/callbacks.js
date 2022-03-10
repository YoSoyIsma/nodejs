// Ejemplo de funcion de callback
// setTimeout(function(){
//     console.log("Hola Mundo");
// }, 1000);

const getUsuarioByID= (id, callback) => {

    const usuario = {
        id,
        nombre: "ismael"
    }

    setTimeout( () =>{
        // console.log(usuario);
        callback(usuario)
    }, 1500)
}

// getUsuarioByID(10, () =>{
//     console.log("Hola Mundo");
// });

getUsuarioByID(10, (usuario ) =>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase() );
});