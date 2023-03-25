package com.example.proba.Product;

public enum Property {
    NUTRITIONAL_SUPPLEMENT("nutritional_supplement", 0.3),
    TRAINING_EQUIPMENT("training_equipment", 0.3),
    CLOTHES("clothes", 0.3),
    NUTRITION("nutrition", 0.3),
    VITAMIN_MINERAL("vitamin_mineral", 0.3),
    FROM_EUROPE("from_europe", 0.05),
    FROM_AMERICA("from_america", 0.05),
    FROM_ASIA("from_asia", 0.05),
    ANIMAL_ORIGIN("animal_origin", 0.1),
    VEGAN("vegan", 0.1),
    PROTEIN("protein", 0.2),
    CREATINE("creatine", 0.2),
    CAFFEINE("caffeine", 0.2),
    POWDER("powder", 0.1),
    PILLS("pills", 0.1),
    LIQUID("liquid", 0.1),
    UPPER_BODY("upper_body", 0.1),
    LOWER_BODY("lower_body", 0.1),
    MUSCLE_GAIN("muscle_gain", 0.2),
    WEIGHT_LOSS("weight_loss", 0.2),
    FOR_MEN("for_men", 0.2),
    FOR_WOMEN("for_women", 0.2),
    INDOOR("indoor", 0.1),
    OUTDOOR("outdoor", 0.1),
    TECH("tech", 0.2),
    WEARABLE("wearable", 0.05),
    STRETCHING("stretching", 0.1),
    YOGA("yoga", 0.2),
    BIO("bio", 0.1),
    SNACK("snack", 0.2);

    private String name;
    private Double value;

    Property(String name, Double value) {
        this.name = name;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public Double getValue() {
        return value;
    }
}
