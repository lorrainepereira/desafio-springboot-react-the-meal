package br.com.test.searchmeal.repository;

import br.com.test.searchmeal.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends JpaRepository<Meal, Integer> {

    Meal findByStrMealIgnoreCase(String strMeal);

    Meal findByStrMealContainingIgnoreCase(String strMeal);

}
