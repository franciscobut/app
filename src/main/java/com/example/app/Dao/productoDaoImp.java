package com.example.app.Dao;

import com.example.app.models.Producto;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional

public class productoDaoImp implements  productoDao{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Producto> getProducto() {
        String query="FROM Producto";
        return  entityManager.createQuery(query).getResultList();



    }
}
