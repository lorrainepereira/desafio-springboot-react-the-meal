package br.com.test.searchmeal.service;

import br.com.test.searchmeal.dto.MealDTO;
import br.com.test.searchmeal.mapper.MealMapper;
import br.com.test.searchmeal.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private MealMapper mealMapper;

    public List<MealDTO> findAll() {
        return mealMapper.toDto(mealRepository.findAll());
    }

    public MealDTO findByStrMeal(String strMeal) {
        return mealMapper.toDto(mealRepository.findByStrMealIgnoreCase(strMeal));
    }

    public MealDTO findByStrMealContainingIgnoreCase(String strMeal) {
        return mealMapper.toDto(mealRepository.findByStrMealContainingIgnoreCase(strMeal));
    }
}
