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

}