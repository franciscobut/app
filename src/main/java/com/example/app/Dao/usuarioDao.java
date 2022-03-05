package com.example.app.Dao;

import com.example.app.models.Usuario;

import java.util.List;

public interface usuarioDao {
    List<Usuario> getUsuarios();


    void eliminar(Long id);

    void registrar(Usuario usuario);
}
