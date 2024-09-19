import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const RecipeHealth = ({vegetarian,vegan,glutten,dairy}) => {
    return (
        <div className="section-info">
                       
            <h2><FontAwesomeIcon icon={faHeart} style={{ color: '#BCA37F', fontSize: '24px' }}/> Health Information</h2>
            
            <div className="health-allergy-data">
                <div><h3>Vegetarian: </h3><p>{vegetarian === true ? 'Yes' : 'No'}</p></div>
                <div><h3>Vegan: </h3><p>{vegan === true ? 'Yes' : 'No'}</p></div>
                <div><h3>Glutten Free: </h3><p>{glutten === true ? 'Yes' : 'No'}</p></div>
                <div><h3>Dairy Free: </h3><p>{dairy === true ? 'Yes' : 'No'}</p></div>
            </div>
        </div>
    );
}

export default RecipeHealth;