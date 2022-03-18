// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarProductos();
  $('#productos').DataTable();

});


async function cargarProductos(){
    const request= await fetch('api/productos',{
    method:'GET',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }
    });
    const productos=await request.json();
    console.log(productos);
    let listado='';

        for(let producto of productos){
              let botonEliminar/*='<a href="#" onclick="eliminarUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>'*/
             let product='<tr><td>'+producto.id+' </td><td>'

             +producto.nombre+'</td> <td>'+producto.existencia+
             '</td><td> '+producto.descripcion+'</td><td>'+producto.marca+
             '</td><td>'+producto.precio+
             '</td><td>'+botonEliminar+'</td></tr> ';
             listado+=product;
        }


        document.querySelector('#productos tbody').outerHTML=listado


}