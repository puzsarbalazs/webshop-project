package com.example.proba.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("api/products")
public class ProductController {

    public final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @PostMapping
    public void addProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
    }

    @DeleteMapping(path = "{productId}")
    public void deleteProduct(@PathVariable("productId") Integer id){
        productService.deleteProduct(id);
    }

    @CrossOrigin
    @PutMapping(path = "{productId}")
    public void updateProduct(@PathVariable("productId") Integer id,
                              @RequestParam(required = false) String title,
                              @RequestParam(required = false) String description,
                              @RequestParam(required = false) String price,
                              @RequestParam(required = false) String category,
                              @RequestParam(required = false) String image,
                              @RequestParam(required = false) String properties)
                                  {
        productService.updateProduct(id, title, description, price, category, image, properties);
    }

    @GetMapping(path = "categories")
    public List<String> getCategoires() {
        return productService.getCategories();
    }

    @PostMapping(path = "recommended")
    public List<Product> getRecommendedCategories(@RequestBody List<Integer> idList) {
        return productService.getRecommendedProducts(idList);
    }
}

