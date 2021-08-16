package br.com.test.searchmeal.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class IngredientDTO implements Serializable {

    private Integer idIngredient;
    private String name;
}
