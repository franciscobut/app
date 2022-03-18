package com.example.app.Dao;

import com.example.app.models.Producto;

import java.util.List;

public interface productoDao {
    List<Producto> getProducto();

    void registrar(Producto producto);
}
