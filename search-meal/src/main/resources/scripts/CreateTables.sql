create table meal.ingredient
(
    id_ingredient serial
        constraint ingredient_pkey
            primary key,
    name          varchar(255)
);

alter table meal.ingredient
    owner to postgres;

create table meal.meal
(
    id_meal             serial
        constraint meal_pkey
            primary key,
    str_area            varchar(255),
    str_category        varchar(255),
    str_drink_alternate varchar(255),
    str_instructions    varchar(255),
    str_meal            varchar(255),
    str_meal_thumb      varchar(255),
    str_tags            varchar(255),
    str_youtube         varchar(255)
);

alter table meal.meal
    owner to postgres;

create table meal."meal-ingredient"
(
    "idIngredient" integer,
    "idMeal"       integer
);

alter table meal."meal-ingredient"
    owner to postgres;
