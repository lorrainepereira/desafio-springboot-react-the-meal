package br.com.test.searchmeal.mapper;

import br.com.test.searchmeal.dto.MealDTO;
import br.com.test.searchmeal.model.Meal;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MealMapper{

    MealDTO toDto(Meal meal);

    List<MealDTO> toDto(List<Meal> meal);

}
