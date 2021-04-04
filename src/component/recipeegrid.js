import React from 'react'

function RecipeeList({recipe_name ,image ,cuisinnetyepe,calories ,url_of_recipe}) {
    return (
    
        <div className="card cat-box bot-row mb-1 mt-2 ml-2" style={ {width: "16rem" , height: "auto" } }>
        <div className="card-body ">
             <img src={image} className="card-img-top" />
            <h5 className="card-title mt-2 m-0">{recipe_name}</h5>
            <h6 className="card-text ">{cuisinnetyepe}</h6>
            <h6 className="card-text">Calories - { Math.floor(calories)}</h6>
            <a href={url_of_recipe} className="btn btn-primary ">Check</a>
        </div>
    </div>
        
    )
}

export default RecipeeList