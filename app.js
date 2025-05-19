// Sample recipe data
const recipes = [
    {
        id: 1,
        title: "Classic Margherita Pizza",
        description: "A simple yet delicious pizza with fresh tomatoes, mozzarella, and basil.",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500",
        category: "dinner",
        cookingTime: "30 mins",
        ingredients: ["Pizza dough", "Fresh tomatoes", "Mozzarella", "Fresh basil", "Olive oil"],
        instructions: "1. Preheat oven to 450°F\n2. Roll out pizza dough\n3. Add toppings\n4. Bake for 15-20 minutes"
    },
    {
        id: 2,
        title: "Avocado Toast",
        description: "Creamy avocado on toasted bread with a sprinkle of salt and pepper.",
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500",
        category: "breakfast",
        cookingTime: "10 mins",
        ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Red pepper flakes"],
        instructions: "1. Toast bread\n2. Mash avocado\n3. Spread on toast\n4. Season to taste"
    },
    {
        id: 3,
        title: "Vegetable Stir Fry",
        description: "Quick and healthy stir-fried vegetables with tofu.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        category: "vegetarian",
        cookingTime: "20 mins",
        ingredients: ["Tofu", "Broccoli", "Carrots", "Bell peppers", "Soy sauce"],
        instructions: "1. Cut vegetables\n2. Stir-fry tofu\n3. Add vegetables\n4. Season with soy sauce"
    },
    {
        id: 4,
        title: "Chocolate Lava Cake",
        description: "Decadent chocolate cake with a molten center, perfect for dessert lovers.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
        category: "dessert",
        cookingTime: "25 mins",
        ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla extract"],
        instructions: "1. Melt chocolate and butter\n2. Mix with other ingredients\n3. Bake at 425°F for 12-14 minutes\n4. Serve warm"
    },
    {
        id: 5,
        title: "Greek Salad",
        description: "Fresh and healthy Mediterranean salad with feta cheese and olives.",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500",
        category: "lunch",
        cookingTime: "15 mins",
        ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Kalamata olives", "Olive oil", "Oregano"],
        instructions: "1. Chop vegetables\n2. Combine ingredients\n3. Add feta and olives\n4. Dress with olive oil and oregano"
    },
    {
        id: 6,
        title: "Blueberry Pancakes",
        description: "Fluffy pancakes loaded with fresh blueberries and maple syrup.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2021/09/blueberry-pancakes-1.jpg",
        category: "breakfast",
        cookingTime: "20 mins",
        ingredients: ["Flour", "Baking powder", "Milk", "Eggs", "Blueberries", "Maple syrup", "Butter"],
        instructions: "1. Mix dry ingredients\n2. Add wet ingredients\n3. Fold in blueberries\n4. Cook on griddle until golden"
    },
    {
        id: 7,
        title: "Chicken Tikka Masala",
        description: "Creamy Indian curry with tender chicken pieces in a spiced tomato sauce.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500",
        category: "dinner",
        cookingTime: "45 mins",
        ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Heavy cream", "Garam masala", "Ginger", "Garlic"],
        instructions: "1. Marinate chicken in yogurt and spices\n2. Grill chicken\n3. Simmer in tomato sauce\n4. Add cream and finish cooking"
    },
    {
        id: 8,
        title: "Quinoa Buddha Bowl",
        description: "Nutritious bowl packed with quinoa, roasted vegetables, and avocado.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        category: "vegetarian",
        cookingTime: "30 mins",
        ingredients: ["Quinoa", "Sweet potato", "Kale", "Avocado", "Chickpeas", "Tahini dressing"],
        instructions: "1. Cook quinoa\n2. Roast vegetables\n3. Prepare dressing\n4. Assemble bowl with all ingredients"
    },
    {
        id: 9,
        title: "Tiramisu",
        description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
        category: "dessert",
        cookingTime: "40 mins",
        ingredients: ["Ladyfingers", "Mascarpone cheese", "Espresso", "Eggs", "Sugar", "Cocoa powder"],
        instructions: "1. Prepare coffee mixture\n2. Make mascarpone cream\n3. Layer ladyfingers and cream\n4. Dust with cocoa powder"
    },
    {
        id: 10,
        title: "Grilled Salmon",
        description: "Perfectly grilled salmon fillet with lemon and herbs.",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
        category: "dinner",
        cookingTime: "25 mins",
        ingredients: ["Salmon fillet", "Lemon", "Dill", "Olive oil", "Garlic", "Salt", "Pepper"],
        instructions: "1. Season salmon\n2. Heat grill\n3. Cook 4-5 minutes per side\n4. Serve with lemon wedges"
    },
    {
        id: 11,
        title: "Shakshuka",
        description: "Middle Eastern breakfast dish with poached eggs in a spiced tomato sauce.",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500",
        category: "breakfast",
        cookingTime: "30 mins",
        ingredients: ["Eggs", "Tomatoes", "Onion", "Bell peppers", "Garlic", "Cumin", "Paprika", "Feta cheese"],
        instructions: "1. Sauté vegetables\n2. Add spices and tomatoes\n3. Create wells for eggs\n4. Poach eggs in sauce\n5. Top with feta and herbs"
    },
    {
        id: 12,
        title: "Mango Sticky Rice",
        description: "Traditional Thai dessert with sweet sticky rice and fresh mango.",
        image: "https://theforkedspoon.com/wp-content/uploads/2020/05/Mango-Sticky-Rice-8-700x1050.jpg",
        category: "dessert",
        cookingTime: "35 mins",
        ingredients: ["Sticky rice", "Coconut milk", "Mango", "Sugar", "Salt", "Pandan leaves"],
        instructions: "1. Soak and steam rice\n2. Prepare coconut sauce\n3. Slice mango\n4. Combine and serve warm"
    },
    {
        id: 13,
        title: "Jollof Rice",
        description: "West African one-pot rice dish cooked in a rich tomato sauce with spices.",
        image: "https://t3.ftcdn.net/jpg/04/91/89/88/360_F_491898860_7sw0fGHNn08wV4y4yRwWTVK18TdzXz6j.jpg",
        category: "dinner",
        cookingTime: "45 mins",
        ingredients: ["Rice", "Tomatoes", "Onion", "Red bell pepper", "Scotch bonnet", "Tomato paste", "Thyme", "Bay leaves", "Vegetable oil"],
        instructions: "1. Blend tomatoes, peppers, and onions\n2. Fry tomato paste\n3. Add blended mixture and spices\n4. Add rice and cook until tender"
    },
    {
        id: 14,
        title: "Bobotie",
        description: "South African spiced minced meat baked with an egg-based topping.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bobotie%2C_South_African_dish.jpg/512px-Bobotie%2C_South_African_dish.jpg",
        category: "dinner",
        cookingTime: "60 mins",
        ingredients: ["Minced beef", "Onion", "Bread", "Milk", "Curry powder", "Turmeric", "Raisins", "Almonds", "Bay leaves"],
        instructions: "1. Soak bread in milk\n2. Cook spiced meat mixture\n3. Add egg topping\n4. Bake until golden"
    },
    {
        id: 15,
        title: "Injera with Doro Wat",
        description: "Ethiopian sourdough flatbread served with spicy chicken stew.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Injera_with_eight_kinds_of_stew.jpg/512px-Injera_with_eight_kinds_of_stew.jpg",
        category: "dinner",
        cookingTime: "90 mins",
        ingredients: ["Teff flour", "Chicken", "Onions", "Berbere spice", "Niter kibbeh", "Hard-boiled eggs"],
        instructions: "1. Prepare injera batter\n2. Cook spicy chicken stew\n3. Make thin injera pancakes\n4. Serve stew on injera"
    },
    {
        id: 16,
        title: "Chakalaka",
        description: "South African spicy vegetable relish, perfect as a side dish.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        category: "lunch",
        cookingTime: "30 mins",
        ingredients: ["Carrots", "Cabbage", "Onion", "Tomatoes", "Curry powder", "Baked beans", "Chili"],
        instructions: "1. Grate vegetables\n2. Sauté with spices\n3. Add tomatoes and beans\n4. Simmer until tender"
    },
    {
        id: 17,
        title: "Suya",
        description: "Nigerian spicy grilled meat skewers with peanut-based spice mix.",
        image: "https://imgs.search.brave.com/f29myCfQAV7Eb-8djzPceMOBIL_MkwuJogmSylamu8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvM1VG/UzgtcjVheXhIbEVD/N19ERjJIelE3RC1Z/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/X19vcHRfX2Fib3V0/Y29tX19jb2V1c19f/cmVzb3VyY2VzX19j/b250ZW50X21pZ3Jh/dGlvbl9fc2VyaW91/c19lYXRzX19zZXJp/b3VzZWF0cy5jb21f/XzIwMjBfXzEwX18y/MDIwMTAxNS1TdXlh/LXNoby1zcGFldGgt/MS03OGM1OGJlNzIz/Yzk0NDA2OGIzZjg1/YzhmZjRmOWQyMy5q/cGc",
        category: "dinner",
        cookingTime: "40 mins",
        ingredients: ["Beef", "Peanut powder", "Ginger", "Garlic", "Cayenne pepper", "Onion", "Bell peppers"],
        instructions: "1. Prepare suya spice mix\n2. Marinate meat\n3. Thread on skewers\n4. Grill until charred"
    },
    {
        id: 18,
        title: "Malva Pudding",
        description: "South African sweet and sticky dessert pudding with apricot jam.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Malva_Pudding.jpg/512px-Malva_Pudding.jpg",
        category: "dessert",
        cookingTime: "50 mins",
        ingredients: ["Flour", "Sugar", "Eggs", "Apricot jam", "Milk", "Butter", "Vinegar", "Cream"],
        instructions: "1. Mix batter ingredients\n2. Bake until risen\n3. Prepare hot cream sauce\n4. Pour sauce over hot pudding"
    },
    {
        id: 19,
        title: "Pad Thai",
        description: "Classic Thai stir-fried rice noodles with tamarind sauce, peanuts, and lime.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500",
        category: "dinner",
        cookingTime: "30 mins",
        ingredients: ["Rice noodles", "Tamarind paste", "Palm sugar", "Fish sauce", "Tofu", "Bean sprouts", "Peanuts", "Lime", "Eggs"],
        instructions: "1. Soak rice noodles\n2. Prepare tamarind sauce\n3. Stir-fry ingredients\n4. Toss with sauce and garnish"
    },
    {
        id: 20,
        title: "Shakshuka",
        description: "Middle Eastern breakfast dish with poached eggs in spiced tomato sauce.",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500",
        category: "breakfast",
        cookingTime: "25 mins",
        ingredients: ["Eggs", "Tomatoes", "Onion", "Bell peppers", "Garlic", "Cumin", "Paprika", "Feta cheese"],
        instructions: "1. Sauté vegetables\n2. Add spices and tomatoes\n3. Create wells for eggs\n4. Poach eggs in sauce"
    },
    {
        id: 21,
        title: "Beef Rendang",
        description: "Indonesian slow-cooked beef in rich coconut and spice sauce.",
        image: "https://imgs.search.brave.com/OcIAJEahrRO4Ow9xFrBf2L4wYglJ7sG-MoYAFdcNcgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20veHFpQkFP/czU1ZXNqRnpxNDFU/T0REOVpndXVvbE5p/b0tuTFZuR3Fna1Bx/cy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/Yldkei9Mbk5sWVhK/amFDNWljbUYyL1pT/NWpiMjB2ZDBvME9H/VlovZVhkWmFXNU5V/MlJYUzAxci9VRGhz/TldKdGIyeDFTV2xZ/L0xUY3RhMmxUZWsw/MldVTk8vVVM5eWN6/cG1hWFE2TlRZdy9P/ak15TURveE9qQXZa/enBqL1pTOWhTRkl3/WTBoTk5reDUvT1RC/WldFNHdMMXBYUm5w/aC9WMFoxV20wNWRs/cEROV292L1lqSXdk/bVF6UVhSWk1qbDEv/WkVkV2RTOWtRemt4/WTBkNC9kbGxYVW5w/TWVrbDNMMDFxL1VY/Wk5WRWwyWTIxV2RW/cEgvUm5Vdldua3dl/VTFFU1RCTS9XRUp2/WWpOU2RpOU1WRVY0/L1RHMXdkMXBYWXcu/anBlZw",
        category: "dinner",
        cookingTime: "3 hours",
        ingredients: ["Beef", "Coconut milk", "Lemongrass", "Galangal", "Turmeric leaves", "Kaffir lime leaves", "Chili", "Garlic"],
        instructions: "1. Prepare spice paste\n2. Cook beef in coconut milk\n3. Simmer until tender\n4. Reduce until sauce thickens"
    },
    {
        id: 22,
        title: "Miso Ramen",
        description: "Japanese noodle soup with miso broth and various toppings.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500",
        category: "lunch",
        cookingTime: "45 mins",
        ingredients: ["Ramen noodles", "Miso paste", "Pork belly", "Soft-boiled egg", "Corn", "Green onions", "Nori", "Bean sprouts"],
        instructions: "1. Prepare miso broth\n2. Cook noodles\n3. Prepare toppings\n4. Assemble bowl"
    },
    {
        id: 23,
        title: "Chicken Biryani",
        description: "Fragrant Indian rice dish with spiced chicken and aromatic basmati rice.",
        image: "https://t3.ftcdn.net/jpg/08/18/97/86/360_F_818978614_BY0RVLq6A8K8v6psl4WkVuRHcokZQH0R.jpg",
        category: "dinner",
        cookingTime: "1 hour",
        ingredients: ["Basmati rice", "Chicken", "Yogurt", "Saffron", "Cardamom", "Cinnamon", "Mint", "Cilantro"],
        instructions: "1. Marinate chicken\n2. Par-cook rice\n3. Layer rice and chicken\n4. Steam until done"
    },
    {
        id: 24,
        title: "Croissant",
        description: "Buttery, flaky French pastry in a crescent shape.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500",
        category: "breakfast",
        cookingTime: "4 hours",
        ingredients: ["Flour", "Butter", "Yeast", "Milk", "Sugar", "Salt", "Egg"],
        instructions: "1. Make dough\n2. Create butter layers\n3. Fold and roll\n4. Shape and bake"
    }
];

// DOM Elements
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const themeToggle = document.getElementById('themeToggle');

// Theme Management
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};

// Recipe Card Template
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-category="${recipe.category}">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h2 class="recipe-title">${recipe.title}</h2>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span>${recipe.cookingTime}</span>
                    <span>${recipe.category}</span>
                </div>
                <button class="view-more-btn" onclick="showRecipeDetails(${recipe.id})">View Recipe</button>
            </div>
        </div>
    `;
};

// Display Recipes
const displayRecipes = (recipesToShow = recipes) => {
    recipesContainer.innerHTML = recipesToShow.map(recipe => createRecipeCard(recipe)).join('');
};

// Search and Filter
const filterRecipes = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    return recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
                            recipe.description.toLowerCase().includes(searchTerm) ||
                            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
        
        const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });
};

// Event Listeners
searchBtn.addEventListener('click', () => {
    const filteredRecipes = filterRecipes();
    displayRecipes(filteredRecipes);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const filteredRecipes = filterRecipes();
        displayRecipes(filteredRecipes);
    }
});

categoryFilter.addEventListener('change', () => {
    const filteredRecipes = filterRecipes();
    displayRecipes(filteredRecipes);
});

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Recipe Details Modal
const showRecipeDetails = (recipeId) => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" style="width: 100%; max-height: 300px; object-fit: cover;">
            <div class="recipe-details">
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Instructions:</h3>
                <p>${recipe.instructions}</p>
                <p><strong>Cooking Time:</strong> ${recipe.cookingTime}</p>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.onclick = () => {
        modal.remove();
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
};

// Add modal styles
const style = document.createElement('style');
style.textContent = `
    .modal {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
    }

    .modal-content {
        background-color: var(--card-background);
        margin: 5% auto;
        padding: 20px;
        width: 90%;
        max-width: 600px;
        border-radius: 10px;
        position: relative;
        max-height: 90vh;
        overflow-y: auto;
    }

    .close-btn {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 28px;
        cursor: pointer;
        color: var(--text-color);
    }

    .recipe-details {
        margin-top: 20px;
    }

    .recipe-details h3 {
        color: var(--primary-color);
        margin: 15px 0 10px;
    }

    .recipe-details ul {
        list-style-type: none;
        padding-left: 0;
    }

    .recipe-details li {
        margin: 5px 0;
        padding-left: 20px;
        position: relative;
    }

    .recipe-details li:before {
        content: "•";
        color: var(--primary-color);
        position: absolute;
        left: 0;
    }
`;

document.head.appendChild(style);

// Initialize
initTheme();
displayRecipes();