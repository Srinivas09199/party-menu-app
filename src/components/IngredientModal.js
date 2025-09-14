import React from 'react';
import { Search, Filter, ShoppingCart, ChefHat, X, Plus, Minus } from 'lucide-react';


const IngredientModal = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{dish.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">{dish.description}</p>
          
          <h3>Ingredients:</h3>
          <ul className="ingredients-list">
            {dish.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-name">{ingredient.name}</span>
                <span className="ingredient-quantity">{ingredient.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default IngredientModal;