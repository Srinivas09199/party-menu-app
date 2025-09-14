import React from 'react';
// import { Search, Filter, ShoppingCart, ChefHat, X, Plus, Minus } from 'lucide-react';

const DishCard = ({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) => {
  return (
    <div className={`dish-card ${isSelected ? 'selected' : ''}`}>
      <div className="dish-image-container">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <div className={`dish-type ${dish.type.toLowerCase()}`}>
          {dish.type}
        </div>
      </div>
      
      <div className="dish-info">
        <h3 className="dish-name">{dish.name}</h3>
        <p className="dish-description">{dish.description}</p>
        
        <div className="dish-actions">
          <button
            className="ingredients-btn"
            onClick={() => onViewIngredients(dish)}
          >
            Ingredients
          </button>
          
          <button
            className={`add-remove-btn ${isSelected ? 'remove' : 'add'}`}
            onClick={() => isSelected ? onRemoveDish(dish.id) : onAddDish(dish.id)}
          >
            {isSelected ? 'Remove' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};



export default DishCard;