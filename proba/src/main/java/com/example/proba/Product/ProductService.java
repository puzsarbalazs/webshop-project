package com.example.proba.Product;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final PropertyConverter propertyConverter;

    @Autowired
    public ProductService(ProductRepository productRepository, PropertyConverter propertyConverter) {
        this.productRepository = productRepository;
        this.propertyConverter = propertyConverter;
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public void addNewProduct(Product product) {
        Optional<Product> productByTitle = productRepository.findProductByTitle(product.getTitle());
        if (productByTitle.isPresent()){
            throw new IllegalStateException("title taken");
        } else {
            productRepository.save(product);
        }
        System.out.println(product);
    }

    public void deleteProduct(Integer productId) {
        boolean exists = productRepository.existsById(productId);
        if (!exists) {
            throw new IllegalStateException("no product with id " + productId);
        } else {
            productRepository.deleteById(productId);
        }

    }

    @Transactional
    public void updateProduct(Integer id, String title, String description, String price, String category, String image, String properties) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new IllegalStateException("no product with id " + id));
        if (title != null && title.length()>0 && !product.getTitle().equals(title)){
            product.setTitle(title);
        }
        if (description != null && description.length()>0 && !product.getDescription().equals(description)){
            product.setDescription(description);
        }
        if (category != null && category.length()>0 && !product.getCategory().equals(category)){
            product.setCategory(category);
        }
        //a price nem int kéne h legyen hanem double
        if (price != null && price.length()>0 && !String.valueOf(product.getPrice()).equals(price)){
            //product.setPrice(Integer.parseInt(price));
            product.setPrice(Double.parseDouble(price));
        }
        if (image != null && image.length()>0 && !product.getImage().equals(image)){
            product.setImage(image);
        }
        if (properties != null && properties.length()>0 && !product.getProperties().equals(properties)) {
            product.setProperties(propertyConverter.convertToEntityAttribute(properties));
        }
    }

    public Map<String, Long> convertPropertyCounts1(List<String> propertyList) {
        List<String> list = Arrays.asList("asd", "qwe", "fsd", "qwe", "asd", "géa", "asd");
        Map<String, Long> counted = list.stream()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        counted.remove("");
        return counted;
    }

    public List<Product> filterProductsById(List<Integer> idList) {
        List<Product> filteredList = new ArrayList<>();
        Set<Integer> idSet = new HashSet<>(idList);

        for (Product product : getProducts()) {
            Integer id = (Integer) product.getId();
            if (!idSet.contains(id)) {
                filteredList.add(product);
            }
        }

        return filteredList;
    }

    private Map<Property, Integer> convertPropertyCounts(List<Integer> idList) {
        List<Property> properties = idList.stream().map(productRepository::findById)
                .flatMap(product -> product.get().getProperties().stream()).toList();
        Map<Property, Integer> map = new HashMap<>();
        for (Property property : properties) {
            map.merge(property, 1, Integer::sum);
        }
        return map;
    }

    public Double calculateRecommendationValue(Map<Property, Integer> propertyList, Product product) {
        Double recommendationValue = 0.0;
        List<Property> productProperties = product.getProperties();
        for (Property property: productProperties) {
            recommendationValue += property.getValue() * propertyList.getOrDefault(property, 0);
        }
        return recommendationValue;
    }

    public List<Product> getRecommendedProducts(List<Integer> idList) {
        List<Product> filteredProducts = filterProductsById(idList);
        Map<Property, Integer> propertyCounts = convertPropertyCounts(idList);
        Map<Product, Double> recommendationValues = new HashMap<>();
        for (Product product: filteredProducts) {
            recommendationValues.put(product,calculateRecommendationValue(propertyCounts, product));
        }
        System.out.println(recommendationValues);
        final List<Product> asd = recommendationValues.entrySet().stream().sorted(Map.Entry.<Product, Double>comparingByValue().reversed())
                .limit(4).map(Map.Entry::getKey).collect(Collectors.toList());
        System.out.println(asd);
        return recommendationValues.entrySet().stream().sorted(Map.Entry.<Product, Double>comparingByValue().reversed())
                .limit(3).map(Map.Entry::getKey).collect(Collectors.toList());
    }

    public List<String> getCategories() {
        return productRepository.findCategories();
    }
}
