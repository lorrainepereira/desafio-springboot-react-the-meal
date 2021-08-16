package br.com.test.searchmeal.controller;

import br.com.test.searchmeal.dto.MealDTO;
import br.com.test.searchmeal.service.MealService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/meal")
@Api(produces = MediaType.APPLICATION_JSON_VALUE, value = "Meals")
public class MealController {

    private static final String MEAL = "meal";
    private static final String SEARCH_MEAL =   "/{" +MEAL  + "}";

    @Autowired
    private MealService mealService;

    @ApiOperation(
            value = "Find All Meals",
            response = MealDTO.class,
            responseContainer = "List"
    )
    @GetMapping("/")
    public ResponseEntity findAll() {
        List<MealDTO> lista = mealService.findAll();
        return ResponseEntity.ok().body(lista);
    }

    @ApiOperation(
            value = "Search Meal",
            response = MealDTO.class
    )
    @GetMapping(path =SEARCH_MEAL)
    public ResponseEntity searchMeal(
            @ApiParam(value = "Meal", name = MEAL, required = true)
            @PathVariable(MEAL)
            String meal)
    {
        return ResponseEntity.ok().body(mealService.findByStrMealContainingIgnoreCase(meal));
    }

}
