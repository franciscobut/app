// Call the dataTables jQuery plugin
$(document).ready(function() {
    //on ready
});

async function registrarUsuario(){
    let datos={};
    datos.nombre=document.getElementById('txtNombre').value;
    datos.apellido=document.getElementById('txtApellido').value;
    datos.email=document.getElementById('txtEmail').value;
    datos.telefono=document.getElementById('txtTelefono').value;
    datos.password=document.getElementById('txtPassword').value;
    let repetirPassword=document.getElementById('txtRepetirPassword').value;

    if(repetirPassword!=datos.password){
        alert("la contraseña que escribiste es diferente");
        return;
    }

    const request= await fetch('api/usuarios', {
    method: 'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body: JSON.stringify(datos)
    });
    location.reload();


}

async function registrarProducto(){
    let datos={};
    datos.nombre=document.getElementById('txtNombre').value;
    datos.existencia=document.getElementById('txtExistencia').value;
    datos.descripcion=document.getElementById('txtDescripcion').value;
    datos.marca=document.getElementById('txtMarca').value;
    datos.precio=document.getElementById('txtPrecio').value;


    const request= await fetch('api/productos', {
    method: 'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body: JSON.stringify(datos)
    });
    location.reload();


}