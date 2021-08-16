package br.com.test.searchmeal.mapper;

import br.com.test.searchmeal.dto.MealDTO;
import br.com.test.searchmeal.model.Ingredient;
import br.com.test.searchmeal.model.Meal;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IngredientMapper extends EntityMapper<MealDTO, Ingredient>{


}
