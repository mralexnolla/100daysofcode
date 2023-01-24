import React from 'react';
//import { useState } from 'react';
import { useGlobalContext } from '../AppContext';
import {BsHandThumbsUp} from 'react-icons/bs'

const Meals = () => {
    const { loading, meals } = useGlobalContext();
    if(loading){
        return(
            <section className="section">
                <h4>loading...</h4>
            </section>
        )
    }
    return ( 
        <section className="section-center">
        {
            meals.map((singleMeal) => {
                console.log(singleMeal)
                const {idMeal, strMeal: title, strMealThumb: image } = singleMeal;
                return(
                    <article key={idMeal} className="single-meal">
                        <img src={image}  alt={title} className="img" />
                        <footer>
                            <h5>{title}</h5>
                            <button className='like-btn'> <BsHandThumbsUp /> </button>
                        </footer>
                    </article>
                )
                
            })
        }
        </section>
        
    );
}
 
export default Meals;