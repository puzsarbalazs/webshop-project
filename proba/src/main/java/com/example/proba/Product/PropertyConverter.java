package com.example.proba.Product;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Converter
@Component
public class PropertyConverter implements AttributeConverter<List<Property>, String> {

    @Override
    public String convertToDatabaseColumn(List<Property> propertyList) {
        return propertyList.stream().map(Property::name).collect(Collectors.joining(","));
    }

    @Override
    public List<Property> convertToEntityAttribute(String propertyNames) {
        List<String> propertyList = Arrays.stream(propertyNames.split(",")).toList();
        return propertyList.stream().map(Property::valueOf).collect(Collectors.toList());
    }
}
