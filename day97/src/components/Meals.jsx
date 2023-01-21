import React from 'react';
import { useState } from 'react';
import { useGlobalContext } from '../AppContext';

const Meals = () => {
    const { meals } = useGlobalContext();
    return ( 
        <section className="section-center">
        {
            meals.map((singleMeal) => {
                console.log(singleMeal)
                const {idMeal, strMeal: title, strMealThumb: image } = singleMeal;
                return(
                    <article key={idMeal} className="single-meal">
                        <img src={image}  alt={title} className="img" style={{width: '200px'}} />
                        <footer>
                            <h5>{title}</h5>
                            <button className='like-btn'>click me</button>
                        </footer>
                    </article>
                )
                
            })
        }
        </section>
        
    );
}
 
export default Meals;