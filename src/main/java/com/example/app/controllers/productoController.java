package com.example.app.controllers;


import com.example.app.Dao.productoDao;
import com.example.app.models.Producto;
import com.example.app.models.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.PrivateKey;
import java.util.List;

@RestController
public class productoController {
    @Autowired
    private productoDao productoDao;
    @RequestMapping(value = "api/productos/{id}")
    public Producto getProducto(@PathVariable Long id){
        Producto producto=new Producto();
        producto.setId(id);
        producto.setNombre("pinza");
        producto.setExistencia(5L);
        producto.setDescripcion("pinza de corte");
        producto.setPrecio(5.5f);
        producto.setMarca("ddd");
        return producto;
    }

    @RequestMapping(value = "api/productos")
    public List<Producto> getProducto(){

        return productoDao.getProducto();
    }
}
