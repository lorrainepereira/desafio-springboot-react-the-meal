import React, { useEffect, useState } from 'react';
import { FiChevronRight } from "react-icons/fi";
import logoImg from '../../assets/logo.svg'
import Toastr from '../../components/Toastr';
import { get } from '../../utils/Fetch';
import { Title, Form, Meals } from './styles';


export declare class Meal {
  strMealThumb: string;
  strMeal: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;

}

const URL_BASE = 'http://localhost:8080/api/meal/';

const Dashboard: React.FC = () => {
  
  const [meals, setMeals] = useState<Array<Meal>>([]);
  const [search, setSearch] = useState("");



  useEffect(() => {
    init();
  }, [meals.length === 0]);
  
  function init(): void {
    getMeals()
      .then(meals => {
        setMeals(meals);
      })
      .catch(() => Toastr.error('No meals was found.'));
  }

  async function getMeals(): Promise<any> {
    const endPoint = URL_BASE;
    return await get<any>(endPoint);
  }

  async function searchMeal(): Promise<any> {
    const endPoint = `${URL_BASE + search}`;
    return await get<any>(endPoint);
  }

  function handleSubmit(e: React.ChangeEvent<any>) {
    e.preventDefault();

    getSearch();
  }

  function getSearch(){
    if(search){
      searchMeal().then(meal => {
        console.log(meal);
        if(meal !== ""){
          setMeals([meal]);
        }
      })
      .catch(() => Toastr.error('No meals was found.'));
    }else{
      init();
    }
    
  }
  
  return (
    <>
      <img src={logoImg} alt="Meal Explorer" />
      <Title>Explore novos pratos!</Title>


      <Form onSubmit={e => handleSubmit(e)}>
        <input placeholder="Digite o Prato" name="search" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <button type="submit" > Pesquisar </button>
      </Form>

      {meals && meals.map((meal, index) => (

      <Meals>
        <a href="">
        <img src= {`${meal?.strMealThumb}/preview`} alt=""/>
        <div>
          <strong>{meal?.strMeal}</strong>
          <p>{meal?.strArea}</p>
          <p>{meal?.strCategory}</p>
        </div>
        <FiChevronRight size={ 20 } />
        </a>
      </Meals>
      ))}
    </>
  );
};

export default Dashboard;