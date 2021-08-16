package br.com.test.searchmeal.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "meal")
@NoArgsConstructor
@AllArgsConstructor
public class Meal implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMeal;
    private String strMeal;
    private String strDrinkAlternate;
    private String strCategory;
    private String strArea;
    @Column(length = 2000)
    private String strInstructions;
    private String strMealThumb;
    private String strYoutube;
    private String strTags;

    @ManyToMany
    @JoinTable(name="mealingredient", joinColumns=
            {@JoinColumn(name="idIngredient")}, inverseJoinColumns=
            {@JoinColumn(name="idMeal")})
    private List<Ingredient> ingredients;
}
