package com.example.proba.Product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class ProductConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry
                        .addMapping("/**")
                        .allowedMethods("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS");
            }
        };
    }



    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository)  {
        return args -> {
            Product product1 = new Product(
                    "Whey Protein Powder",
                    29.99,
                    "Whey protein powder for building muscle mass from whey",
                    "Supplements",
                    "https://assets.puregoldprotein.com/files/compact-500.png",
                    List.of(Property.NUTRITIONAL_SUPPLEMENT, Property.PROTEIN, Property.FROM_EUROPE, Property.POWDER,
                            Property.ANIMAL_ORIGIN, Property.MUSCLE_GAIN)
            );
            Product product2 = new Product(
                    "Weightlifting Belt",
                    39.99,
                    "Heavy duty belt for supporting your back during weightlifting",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/o/p/opasok3b_1.jpg",
                    List.of(Property.TRAINING_EQUIPMENT,Property.WEARABLE, Property.UPPER_BODY, Property.FROM_AMERICA,
                            Property.FOR_MEN)
            );
            Product product3 = new Product(
                    "Resistance Bands",
                    24.99,
                    "Set of 5 resistance bands with varying levels of tension",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/r/e/resistance_band_set_5_gymbeam_1_1.png",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_AMERICA, Property.MUSCLE_GAIN, Property.STRETCHING)
            );
            Product product4 = new Product(
                    "Foam Roller",
                    19.99,
                    "Foam roller for massaging sore muscles",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/f/i/fitness_roller_black_01_1_.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_AMERICA, Property.STRETCHING)
            );
            Product product5 = new Product(
                    "Dumbbell Set",
                    79.99,
                    "Set of 3 dumbbells with adjustable weights",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/d/u/dumbbel_set_30_kg_gymbeam_3_.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_AMERICA, Property.MUSCLE_GAIN)
            );
            Product product6 = new Product(
                    "Pre-Workout Supplement pills",
                    39.99,
                    "Pre-workout supplement to enhance energy and focus",
                    "Supplements",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/e/u/eu_on_gspw_adv_30srv_srgy_6063802_fr.png",
                    List.of(Property.NUTRITIONAL_SUPPLEMENT, Property.FROM_ASIA, Property.MUSCLE_GAIN, Property.PILLS, Property.VEGAN)
            );
            Product product7 = new Product(
                    "Weightlifting Shoes",
                    99.99,
                    "Specialized shoes for weightlifting with increased stability and support",
                    "Clothes",
                    "https://www.ecipo.hu/media/catalog/product/cache/image/650x650/0/1/01_0000301723080_is.jpg",
                    List.of(Property.WEARABLE, Property.CLOTHES, Property.LOWER_BODY, Property.INDOOR, Property.FOR_MEN, Property.FROM_AMERICA)
            );
            Product product8 = new Product(
                    "Jump Rope",
                    9.99,
                    "High quality jump rope for cardio exercise",
                    "Equipment",
                    "https://static.samansport.hu/files/2/0/p100-spr_500x500_fill.webp",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_AMERICA, Property.WEIGHT_LOSS)
            );
            Product product9 = new Product(
                    "Yoga Mat",
                    29.99,
                    "Non-slip yoga mat with carrying strap",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/y/o/yoga_mat_black_angle.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_EUROPE, Property.STRETCHING, Property.YOGA, Property.FOR_WOMEN, Property.INDOOR)
            );
            Product product10 = new Product(
                    "Protein Bar",
                    2.99,
                    "High protein snack bar for post-workout recovery",
                    "Nutrition",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/5/1/51_zv7t125l._ac_sl1000__1_.jpg",
                    List.of(Property.NUTRITION, Property.PROTEIN, Property.FROM_ASIA, Property.BIO, Property.ANIMAL_ORIGIN, Property.MUSCLE_GAIN, Property.SNACK)
            );
            Product product11 = new Product(
                    "Running Shoes",
                    89.99,
                    "Lightweight running shoes with cushioned soles",
                    "Clothes",
                    "https://outdoorlive.hu/wp-content/uploads/2022/08/Hoka-one-one-challenger-ATR-6-Man-Outer-Space-Radiant-Yellow.png",
                    List.of(Property.WEARABLE, Property.CLOTHES, Property.LOWER_BODY, Property.FROM_ASIA, Property.WEIGHT_LOSS, Property.OUTDOOR)
            );
            Product product12 = new Product(
                    "Bike Trainer",
                    199.99,
                    "Indoor bike trainer for year-round cycling workouts",
                    "Equipment",
                    "https://fittsport.com/image/935665527w450h450.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.TECH, Property.LOWER_BODY, Property.FROM_AMERICA, Property.WEIGHT_LOSS, Property.INDOOR)
            );
            Product product13 = new Product(
                    "Foam Yoga Blocks",
                    14.99,
                    "Set of 2 foam blocks for improving yoga poses",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/0/5/05-61350_gray_a.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.STRETCHING, Property.YOGA, Property.FROM_ASIA, Property.FOR_WOMEN, Property.WEIGHT_LOSS, Property.INDOOR)
            );
            Product product14 = new Product(
                    "Ab Roller",
                    14.99,
                    "This ab roller is perfect for targeting your abs and obliques. It's easy to use and compact, making it a great addition to any home gym.",
                    "Equipment",
                    "https://www.vitalforce.hu/www-uploads/2016/02/christopeit-ab-fitness-roller-hasizom-erosito.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_EUROPE, Property.MUSCLE_GAIN, Property.INDOOR)
            );
            Product product15 = new Product(
                    "Kettlebell Set",
                    79.99,
                    "This set of kettlebells includes three different weights: 5, 10, and 15 pounds. They are perfect for building strength and endurance, and are great for both beginners and advanced athletes.",
                    "Equipment",
                    "https://alinda.hu/media/mf_webp/jpg/media/media/catalog/product/cache/760d4bd613f7ccc34890d304050d50b5/k/e/kettlebell_uj_szin_1.webp",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_EUROPE, Property.MUSCLE_GAIN, Property.INDOOR)
            );
            Product product16 = new Product(
                    "Pull-Up Bar",
                    39.99,
                    "The wall-mounted pull-up bar is an effective fitness tool for home training, with which you can train your entire body. It is made of solid and high-quality iron, which is indicated by the load capacity of 200 kg.",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/w/a/wall-mounted-pull-up-bar-gymbeam_3_.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_EUROPE, Property.MUSCLE_GAIN, Property.INDOOR, Property.UPPER_BODY)
            );
            Product product17 = new Product(
                    "Vegan Protein Powder",
                    49.99,
                    "High-quality vegan protein powder to support muscle growth and recovery",
                    "Supplements",
                    "https://bodyselect.com/storage/products/vegan-protein-banana-1-kg_165892895701_1200_1200_85.jpg",
                    List.of(Property.NUTRITIONAL_SUPPLEMENT, Property.PROTEIN, Property.FROM_EUROPE, Property.POWDER, Property.BIO, Property.VEGAN, Property.MUSCLE_GAIN)
            );
            Product product18 = new Product(
                    "Branched-Chain Amino Acids (BCAAs)",
                    29.99,
                    "BCAAs to support muscle protein synthesis and reduce muscle breakdown during exercise.",
                    "Supplements",
                    "https://static.thcdn.com/images/large/webp//productimg/1600/1600/10529280-2114889446264698.jpg",
                    List.of(Property.NUTRITIONAL_SUPPLEMENT, Property.PROTEIN, Property.FROM_ASIA, Property.POWDER, Property.BIO, Property.MUSCLE_GAIN, Property.ANIMAL_ORIGIN)
            );
            Product product19 = new Product(
                    "Creatine Monohydrate",
                    24.99,
                    "Creatine monohydrate to enhance muscle strength and power.",
                    "Supplements",
                    "https://scitec.hu/images/product_images/2164_b54554a5b7ba.webp",
                    List.of(Property.NUTRITIONAL_SUPPLEMENT, Property.CREATINE, Property.FROM_ASIA, Property.POWDER, Property.MUSCLE_GAIN, Property.ANIMAL_ORIGIN)
            );
            Product product20 = new Product(
                    "Pre-Workout Supplement",
                    39.99,
                    "Pre-workout supplement with caffeine, beta-alanine, and other ingredients to enhance energy and focus during exercise.",
                    "Supplements",
                    "https://scitec.hu/images/product_images/16061_3b313c8e7bf0.webp",
                    List.of(Property.NUTRITIONAL_SUPPLEMENT, Property.CREATINE, Property.FROM_ASIA, Property.POWDER, Property.MUSCLE_GAIN, Property.CAFFEINE, Property.VEGAN)
            );
            Product product21 = new Product(
                    "Men's Training Shorts",
                    39.99,
                    "Comfortable and durable shorts for training.",
                    "Clothes",
                    "https://cdn.aboutstatic.com/file/images/fb56ed95be5e18fb4e634e11835c50f0.png?bg=F4F4F5&quality=75&trim=1&height=800&width=600",
                    List.of(Property.CLOTHES, Property.FROM_EUROPE, Property.LOWER_BODY, Property.FOR_MEN, Property.WEARABLE)
            );
            Product product22 = new Product(
                    "Women's Compression Pants",
                    54.99,
                    "Stretchy and supportive pants for compression.",
                    "Clothes",
                    "https://cdn.aboutstatic.com/file/images/3a4f97a9e92bc668bd93642c8bc4244a.png?bg=F4F4F5&quality=75&trim=1&height=480&width=360",
                    List.of(Property.CLOTHES, Property.FROM_ASIA, Property.LOWER_BODY, Property.FOR_WOMEN, Property.WEARABLE)
            );
            Product product23 = new Product(
                    "Weighted Vest",
                    89.99,
                    "Adjustable and breathable weighted vest for resistance training.",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/w/e/weighted_vest_20_kg_gymbeam_5_.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_AMERICA, Property.UPPER_BODY, Property.WEARABLE, Property.MUSCLE_GAIN, Property.PILLS)
            );
            Product product24 = new Product(
                    "Weightlifting Gloves",
                    19.99,
                    "Padded and adjustable gloves for weightlifting.",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/a/_/a_rukavice2_1.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_AMERICA, Property.UPPER_BODY, Property.WEARABLE, Property.MUSCLE_GAIN)
            );
            Product product25 = new Product(
                    "Running Belt",
                    24.99,
                    "Thanks to the flexible design and soft materials, the belt bag fits easily to the hips, provides maximum stability and ensures the freedom of movement of the upper body.",
                    "Equipment",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/h/y/hydrobelt_trail_gymbeam_6_.jpg",
                    List.of(Property.TRAINING_EQUIPMENT, Property.FROM_EUROPE, Property.WEARABLE, Property.WEIGHT_LOSS, Property.OUTDOOR)
            );
            Product product26 = new Product(
                    "Peanut Butter",
                    11.99,
                    "Silky creamy, amazingly tasty, 100% natural, additive-free Pure Gold peanut butter. Thanks to its versatile use, you can spice up your protein shakes, porridges, smoothies, or it is also excellent for baking and cooking!",
                    "NUTRITION",
                    "https://assets.puregoldprotein.com/files/peanut-butter%20m%C3%A1solata.png",
                    List.of(Property.NUTRITION, Property.FROM_EUROPE, Property.SNACK, Property.VEGAN, Property.BIO)
            );
            Product product27 = new Product(
                    "Protein Pancake",
                    14.99,
                    "Protein Pancake pancake powder with whey protein and sweeteners, with 14g of protein per serving",
                    "NUTRITION",
                    "https://assets.puregoldprotein.com/files/protein-pancake-fix.png",
                    List.of(Property.NUTRITION, Property.FROM_AMERICA, Property.SNACK, Property.BIO, Property.MUSCLE_GAIN, Property.POWDER)
            );
            Product product28 = new Product(
                    "Optimum Nutrition Opti-Men Multivitamin",
                    19.99,
                    "Contains over 75 active ingredients and essential daily vitamins and minerals",
                    "VITAMINS AND MINERALS",
                    "https://gymbeam.hu/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/e/u/eu_on_opti-men_90tab_fr_web.png",
                    List.of(Property.VITAMIN_MINERAL, Property.FROM_AMERICA, Property.FOR_MEN, Property.BIO, Property.WEIGHT_LOSS, Property.PILLS)
            );
            Product product29 = new Product(
                    "Garden of Life Vitamin Code Raw Zinc",
                    14.99,
                    "Non-GMO, gluten-free, and dairy-free, providing zinc in a whole food form",
                    "VITAMINS AND MINERALS",
                    "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/gol/gol11652/v/44.jpg",
                    List.of(Property.VITAMIN_MINERAL, Property.FROM_AMERICA, Property.BIO, Property.VEGAN, Property.WEIGHT_LOSS, Property.CAFFEINE)
            );




            productRepository.saveAll(
                    List.of(product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,
                            product11, product12, product13, product14, product15, product16, product17, product18, product19, product20,
                            product21, product22, product23, product24, product25, product26, product27, product28, product29)
            );
        };
        };
    }

