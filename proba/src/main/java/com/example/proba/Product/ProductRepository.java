package com.example.proba.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Query("SELECT p FROM Product p where p.title = ?1")
    Optional<Product> findProductByTitle(String title);

    @Query("select distinct p.category from Product p")
    List<String> findCategories();
}
