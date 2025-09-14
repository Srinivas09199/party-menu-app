import React, { useState, useMemo } from 'react';
import Filters from './components/Filters';
import DishList from './components/DishList';
import IngredientModal from './components/IngredientModal';
//import Summary from './components/Summary';
import { mockDishes } from './data/mockDishes';
import './App.css';
import { Search, Filter, ShoppingCart, ChefHat, X, Plus, Minus } from 'lucide-react';


const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('STARTER');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);

  // Filter dishes based on current state
  const filteredDishes = mockDishes.filter(dish => {
    const matchesCategory = dish.mealType === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVegFilter = !vegOnly || dish.type === 'VEG';
    
    return matchesCategory && matchesSearch && matchesVegFilter;
  });

  // Calculate selected counts per category
  const selectedCounts = {
    'STARTER': selectedDishes.filter(id => mockDishes.find(d => d.id === id)?.mealType === 'STARTER').length,
    'MAIN COURSE': selectedDishes.filter(id => mockDishes.find(d => d.id === id)?.mealType === 'MAIN COURSE').length,
    'DESSERT': selectedDishes.filter(id => mockDishes.find(d => d.id === id)?.mealType === 'DESSERT').length,
    'SIDES': selectedDishes.filter(id => mockDishes.find(d => d.id === id)?.mealType === 'SIDES').length,
  };

  const totalSelected = selectedDishes.length;

  const handleAddDish = (dishId) => {
    setSelectedDishes([...selectedDishes, dishId]);
  };

  const handleRemoveDish = (dishId) => {
    setSelectedDishes(selectedDishes.filter(id => id !== dishId));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
  };

  const handleCloseModal = () => {
    setCurrentDish(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Party Menu Selection</h1>
        <p>Select delicious dishes for your party!</p>
      </header>

      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
        selectedCounts={selectedCounts}
      />

      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />

      <div className="summary-container">
        <div className="total-selected">
          Total Selected Dishes: <span className="count">{totalSelected}</span>
        </div>
        {totalSelected > 0 && (
          <button className="continue-btn">
            Continue to Party Planning
          </button>
        )}
      </div>

      <IngredientModal
        dish={currentDish}
        onClose={handleCloseModal}
      />
    </div>
  );
};
export default App;
