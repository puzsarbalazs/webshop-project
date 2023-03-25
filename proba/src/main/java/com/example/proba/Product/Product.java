package com.example.proba.Product;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table
public class Product {
    public Product(String title, double price, String description, String category, String image, List<Property> properties) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.properties = properties;
        this.inStock = 100;
    }

    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "product_sequence"
    )
    private int id;
    private String title;
    private double price;
    private String description;
    private String category;
    private String image;
    private List<Property> properties;
    private int inStock;

    public Product() {

    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", image='" + image + '\'' +
                ", properties=" + properties +
                ", inStock=" + inStock +
                '}';
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Property> getProperties() {
        return properties;
    }

    public void setProperties(List<Property> properties) {
        this.properties = properties;
    }

    public void setInStock(int inStock) { this.inStock = inStock;}

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public double getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public String getImage() {
        return image;
    }

    public int getInStock() {return inStock; }

    public Product(int id, String title, double price, String description, String category, String image, List<Property> properties) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.properties = properties;
        this.inStock = 100;
    }
}
