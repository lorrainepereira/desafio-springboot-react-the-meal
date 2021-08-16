package br.com.test.searchmeal.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class MealDTO implements Serializable {

    private Integer idMeal;
    private String strMeal;
    private String strDrinkAlternate;
    private String strCategory;
    private String strArea;
    private String strInstructions;
    private String strMealThumb;
    private String strYoutube;
    private String strTags;
    private List<IngredientDTO> ingredients;
}
