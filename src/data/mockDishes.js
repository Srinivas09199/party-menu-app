export const mockDishes = [
  // ---------- MAIN COURSE ----------
  {
    "id": 1,
    "name": "Kadhai Paneer",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "category": { "name": "North Indian" },
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onion", "quantity": "2 large" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Tomato Puree", "quantity": "1 cup" }
    ]
  },
  {
    "id": 2,
    "name": "Dal Makhani",
    "description": "Rich and creamy black lentils cooked in butter and cream.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "category": { "name": "North Indian" },
    "ingredients": [
      { "name": "Black Lentils", "quantity": "1 cup" },
      { "name": "Butter", "quantity": "100g" },
      { "name": "Cream", "quantity": "1/2 cup" },
      { "name": "Tomato", "quantity": "3 medium" }
    ]
  },
  {
    "id": 3,
    "name": "Butter Chicken",
    "description": "Tender chicken in rich tomato and butter gravy.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop",
    "mealType": "MAIN COURSE",
    "type": "NON_VEG",
    "category": { "name": "North Indian" },
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Butter", "quantity": "100g" },
      { "name": "Tomato Puree", "quantity": "1 cup" },
      { "name": "Cream", "quantity": "1/2 cup" }
    ]
  },
  {
    "id": 4,
    "name": "Hyderabadi Biryani",
    "description": "Aromatic basmati rice cooked with spices and meat.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlJnprTaakbTI0kzZAqgw_Ugn8-Wn4d6u4g&s",
    "mealType": "MAIN COURSE",
    "type": "NON_VEG",
    "category": { "name": "Hyderabadi" },
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Mutton", "quantity": "500g" },
      { "name": "Yogurt", "quantity": "1 cup" },
      { "name": "Saffron", "quantity": "1 pinch" }
    ]
  },
  {
    "id": 5,
    "name": "Palak Paneer",
    "description": "Soft paneer cubes in creamy spinach gravy.",
    "image": "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-3.jpg",
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "category": { "name": "Punjabi" },
    "ingredients": [
      { "name": "Spinach", "quantity": "2 cups" },
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Garlic", "quantity": "4 cloves" },
      { "name": "Cream", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 6,
    "name": "Chettinad Chicken Curry",
    "description": "Fiery South Indian chicken curry with aromatic spices.",
    "image": "https://swatisani.net/kitchen/wp-content/uploads/2015/10/IMG_9350.jpg",
    "mealType": "MAIN COURSE",
    "type": "NON_VEG",
    "category": { "name": "South Indian" },
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Coconut", "quantity": "1/2 cup" },
      { "name": "Curry Leaves", "quantity": "10" },
      { "name": "Spice Mix", "quantity": "3 tbsp" }
    ]
  },

  // ---------- STARTERS ----------
  {
    "id": 7,
    "name": "Paneer Tikka",
    "description": "Grilled paneer cubes marinated in yogurt and spices.",
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    "mealType": "STARTER",
    "type": "VEG",
    "category": { "name": "North Indian" },
    "ingredients": [
      { "name": "Paneer", "quantity": "300g" },
      { "name": "Yogurt", "quantity": "1/2 cup" },
      { "name": "Bell Peppers", "quantity": "2 medium" },
      { "name": "Onion", "quantity": "1 large" }
    ]
  },
  {
    "id": 8,
    "name": "Samosa",
    "description": "Crispy triangular pastry filled with spiced potatoes.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    "mealType": "STARTER",
    "type": "VEG",
    "category": { "name": "Street Food" },
    "ingredients": [
      { "name": "Potatoes", "quantity": "4 medium" },
      { "name": "Flour", "quantity": "2 cups" },
      { "name": "Peas", "quantity": "1/2 cup" },
      { "name": "Oil", "quantity": "For frying" }
    ]
  },
  {
    "id": 9,
    "name": "Chicken Tikka",
    "description": "Grilled chicken pieces marinated in yogurt and spices.",
    "image": "https://www.shutterstock.com/image-photo/deliciously-spiced-chicken-tikka-kabab-600nw-2495838045.jpg",
    "mealType": "STARTER",
    "type": "NON_VEG",
    "category": { "name": "North Indian" },
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Yogurt", "quantity": "1/2 cup" },
      { "name": "Ginger-Garlic Paste", "quantity": "2 tbsp" },
      { "name": "Red Chili Powder", "quantity": "1 tsp" }
    ]
  },
  {
    "id": 10,
    "name": "Fish Fry",
    "description": "Crispy fried fish with traditional spices.",
    "image": "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=300&fit=crop",
    "mealType": "STARTER",
    "type": "NON_VEG",
    "category": { "name": "South Indian" },
    "ingredients": [
      { "name": "Fish", "quantity": "500g" },
      { "name": "Turmeric", "quantity": "1 tsp" },
      { "name": "Red Chili Powder", "quantity": "2 tsp" },
      { "name": "Lemon", "quantity": "1 large" }
    ]
  },
  {
    "id": 11,
    "name": "Veg Spring Rolls",
    "description": "Crispy rolls stuffed with stir-fried veggies.",
    "image": "https://i.ytimg.com/vi/hEQQGxS-ynY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDS9USsKg3YdT-6jJ3WNFNhl4-mWw",
    "mealType": "STARTER",
    "type": "VEG",
    "category": { "name": "Indo-Chinese" },
    "ingredients": [
      { "name": "Cabbage", "quantity": "1 cup" },
      { "name": "Carrot", "quantity": "1/2 cup" },
      { "name": "Spring Roll Sheets", "quantity": "8" },
      { "name": "Soy Sauce", "quantity": "2 tsp" }
    ]
  },
  {
    "id": 12,
    "name": "Prawn Tempura",
    "description": "Crispy batter fried prawns served with dip.",
    "image": "https://t3.ftcdn.net/jpg/04/90/45/20/360_F_490452030_SX32SiO4ytYvzCq2HDvnRpmpGfdMnjfD.jpg",
    "mealType": "STARTER",
    "type": "NON_VEG",
    "category": { "name": "Asian" },
    "ingredients": [
      { "name": "Prawns", "quantity": "300g" },
      { "name": "Cornflour", "quantity": "1/2 cup" },
      { "name": "Egg", "quantity": "1" },
      { "name": "Oil", "quantity": "For frying" }
    ]
  },

  // ---------- DESSERTS ----------
  {
    "id": 13,
    "name": "Gulab Jamun",
    "description": "Soft milk dumplings in sugar syrup.",
    "image": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    "mealType": "DESSERT",
    "type": "VEG",
    "category": { "name": "Traditional" },
    "ingredients": [
      { "name": "Milk Powder", "quantity": "1 cup" },
      { "name": "Sugar", "quantity": "2 cups" },
      { "name": "Ghee", "quantity": "2 tbsp" },
      { "name": "Cardamom", "quantity": "4 pods" }
    ]
  },
  {
    "id": 14,
    "name": "Rasmalai",
    "description": "Soft cottage cheese dumplings in sweetened milk.",
    "image": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
    "mealType": "DESSERT",
    "type": "VEG",
    "category": { "name": "Bengali" },
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Milk", "quantity": "1 liter" },
      { "name": "Sugar", "quantity": "1/2 cup" },
      { "name": "Pistachios", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 15,
    "name": "Rasgulla",
    "description": "Spongy balls of paneer soaked in sugar syrup.",
    "image": "https://c8.alamy.com/comp/EYERGC/indian-rasgulla-sweet-dessert-EYERGC.jpg",
    "mealType": "DESSERT",
    "type": "VEG",
    "category": { "name": "Bengali" },
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Sugar", "quantity": "2 cups" },
      { "name": "Water", "quantity": "4 cups" },
      { "name": "Cardamom", "quantity": "2 pods" }
    ]
  },
  {
    "id": 16,
    "name": "Kulfi",
    "description": "Frozen Indian milk dessert with nuts.",
    "image": "https://media.istockphoto.com/id/657073780/photo/rajwari-or-rajwadi-sweet-kesar-badam-pista-kulfi-or-ice-cream-candy.jpg?s=612x612&w=0&k=20&c=cXhI8hVEhYc5inbPXt-YWbUYjlJlGC2TdRd_Xkn56Ig=",
    "mealType": "DESSERT",
    "type": "VEG",
    "category": { "name": "Traditional" },
    "ingredients": [
      { "name": "Milk", "quantity": "1 liter" },
      { "name": "Sugar", "quantity": "1/2 cup" },
      { "name": "Pistachios", "quantity": "2 tbsp" },
      { "name": "Cardamom", "quantity": "3 pods" }
    ]
  },
  {
    "id": 17,
    "name": "Mango Shrikhand",
    "description": "Sweet mango yogurt dessert from Gujarat.",
    "image": "https://www.shutterstock.com/image-photo/amrakhand-alphonso-flavoured-yogurt-shrikhand-260nw-608790716.jpg",
    "mealType": "DESSERT",
    "type": "VEG",
    "category": { "name": "Gujarati" },
    "ingredients": [
      { "name": "Yogurt", "quantity": "2 cups" },
      { "name": "Mango Pulp", "quantity": "1 cup" },
      { "name": "Sugar", "quantity": "1/4 cup" },
      { "name": "Saffron", "quantity": "1 pinch" }
    ]
  },
  {
    "id": 18,
    "name": "Chocolate Brownie",
    "description": "Moist chocolate brownie with nuts.",
    "image": "https://icecreambakery.in/wp-content/uploads/2024/12/Brownie-Recipe-with-Cocoa-Powder-821x821.jpg",
    "mealType": "DESSERT",
    "type": "VEG",
    "category": { "name": "Bakery" },
    "ingredients": [
      { "name": "Dark Chocolate", "quantity": "200g" },
      { "name": "Flour", "quantity": "1 cup" },
      { "name": "Sugar", "quantity": "1/2 cup" },
      { "name": "Walnuts", "quantity": "2 tbsp" }
    ]
  },

  // ---------- SIDES ----------
  {
    "id": 19,
    "name": "Jeera Rice",
    "description": "Fragrant basmati rice cooked with cumin seeds.",
    "image": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop",
    "mealType": "SIDES",
    "type": "VEG",
    "category": { "name": "Rice" },
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "2 cups" },
      { "name": "Cumin Seeds", "quantity": "1 tsp" },
      { "name": "Ghee", "quantity": "2 tbsp" },
      { "name": "Salt", "quantity": "To taste" }
    ]
  },
  {
    "id": 20,
    "name": "Naan",
    "description": "Soft leavened bread baked in tandoor.",
    "image": "https://t3.ftcdn.net/jpg/08/95/50/04/360_F_895500474_IDUMxbOGEBn29tyPyjG8oLEEWlK8ZlOg.jpg",
    "mealType": "SIDES",
    "type": "VEG",
    "category": { "name": "Bread" },
    "ingredients": [
      { "name": "Flour", "quantity": "2 cups" },
      { "name": "Yogurt", "quantity": "1/4 cup" },
      { "name": "Yeast", "quantity": "1 tsp" },
      { "name": "Oil", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 21,
    "name": "Garlic Naan",
    "description": "Tandoori naan topped with garlic and butter.",
    "image": "https://media.istockphoto.com/id/1143530040/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.jpg?s=612x612&w=0&k=20&c=71SgbJtnfiHUiud1oGxnhiZsx5nuivWwZt8DlIk8hi0=",
    "mealType": "SIDES",
    "type": "VEG",
    "category": { "name": "Bread" },
    "ingredients": [
      { "name": "Flour", "quantity": "2 cups" },
      { "name": "Garlic", "quantity": "5 cloves" },
      { "name": "Butter", "quantity": "2 tbsp" },
      { "name": "Coriander", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 22,
    "name": "Tandoori Roti",
    "description": "Whole wheat flatbread cooked in tandoor.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_CFMvqFxN7ajG04iVvNGAdC_rYzLG2bVC-A&s",
    "mealType": "SIDES",
    "type": "VEG",
    "category": { "name": "Bread" },
    "ingredients": [
      { "name": "Whole Wheat Flour", "quantity": "2 cups" },
      { "name": "Water", "quantity": "As needed" },
      { "name": "Salt", "quantity": "1 tsp" },
      { "name": "Ghee", "quantity": "2 tsp" }
    ]
  },
  {
    "id": 23,
    "name": "Papad",
    "description": "Thin crispy lentil crackers.",
    "image": "https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-papadam-a-traditional-indian-snack-papad-or-papadum-in-raw-dried-image_16009234.jpg",
    "mealType": "SIDES",
    "type": "VEG",
    "category": { "name": "Snacks" },
    "ingredients": [
      { "name": "Urad Dal Flour", "quantity": "1 cup" },
      { "name": "Salt", "quantity": "1 tsp" },
      { "name": "Pepper", "quantity": "1 tsp" },
      { "name": "Oil", "quantity": "For roasting" }
    ]
  },
  {
    "id": 24,
    "name": "Raita",
    "description": "Cool yogurt side dish with cucumber.",
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/raita-recipe.webp",
    "mealType": "SIDES",
    "type": "VEG",
    "category": { "name": "Condiment" },
    "ingredients": [
      { "name": "Yogurt", "quantity": "1 cup" },
      { "name": "Cucumber", "quantity": "1 small" },
      { "name": "Salt", "quantity": "1/2 tsp" },
      { "name": "Cumin Powder", "quantity": "1/4 tsp" }
    ]
  }
]
