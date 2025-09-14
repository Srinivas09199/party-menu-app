import React from 'react';
import { Search, Filter, ShoppingCart, ChefHat, X, Plus, Minus } from 'lucide-react';

const Filters = ({ 
  activeCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange, 
  vegOnly, 
  onVegOnlyChange,
  selectedCounts 
}) => {
  const categories = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

  return (
    <div className="filters-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category} {selectedCounts[category] > 0 && `(${selectedCounts[category]})`}
          </button>
        ))}
      </div>
      
      <div className="veg-filter">
        <label className="veg-toggle">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => onVegOnlyChange(e.target.checked)}
          />
          <span className="toggle-slider"></span>
          Veg Only
        </label>
      </div>
    </div>
  );
};

export default Filters;