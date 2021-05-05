
const testData = [{
    difficulty: 3,
    time: 0.5,
    type: "Lunch",
    selection: "Keto",
    culture: "American",
    calories: "Medium Calories",
    recipeTitle: "Salmon with Lemon Cream Sauce",
    ingredients: ["3 Tbsp lemon juice",
        "1/4 cup chicken broth, fish stock, clam juice, white wine, or water",
        "2/3 cup heavy cream",
        "1 tablespoon extra virgin olive oil", "Freshly ground black pepper",
        "1 1/2 pounds salmon fillets",
        "Parsley for garnish"
    ],
    instruction: [
        "Pour the lemon juice, broth and cream into a small pot and bring to a simmer. Immediately lower the heat to low, cover the pot and simmer gently for 10 minutes. Add salt and pepper to taste. The last minute or two, uncover the pot and increase the heat to high to reduce the sauce a bit.",
        "While the sauce is cooking, rinse the salmon in cold water and check for any stray scales (if skin-on). Use needle nose pliers to remove any pin bones. Pat the fish dry with paper towels.",
        "Add the oil to a sauté pan large enough to fit the fillets in one layer. Heat the pan on high and let the pan heat up for 90 seconds.",
        "Place the salmon fillets on plates and pour lemon cream sauce over them and sprinkle with chopped parsley to serve. If you've crisped up the skin, serve the fillets skin-side up so they stay crispy. Otherwise serve the fillets skin-side down."
    ],
    story: "We used skin-on salmon for this recipe, but you can use skinless fillets if you want. The skin tastes great when it is fried and crispy (salmon bacon!). When buying skin-on fish, make certain the fish has been scaled. Ask your fishmonger to do this at the store. Make sure you use \"heavy\" whipping cream for the sauce or it will curdle."
}, {
    difficulty: 2,
    time: 4.0,
    type: "Dinner",
    selection: "Vegetarian",
    recipeTitle: "recipeTitle Name",
    culture: "European",
    calories: "Low Calories",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    instruction: [],
    story: ""
}, {
    difficulty: 4,
    time: 0.5,
    recipeTitle: "Chicken Souvlaki",
    type: "Dinner",
    selection: "Vegan",
    culture: "European",
    calories: "Medium Calories",
    ingredients: ["Finely grated zest of 1 lemon",
        "1/4 cup lemon juice (from 2 lemons)",
        "1/2 teaspoon dried oregano",
        "1 clove garlic, finely chopped",
        "Salt and pepper, to taste",
        "1 teaspoon Maras pepper (or substitute 1/2 teaspoon paprika plus 1/8 teaspoon cayenne pepper)",
        "1/3 cup olive oil",
        "1 pound boneless, skinless breasts, cut into 3/4-inch cubes"
    ],
    instruction: [
        "In a medium bowl whisk, combine the lemon zest, lemon juice, oregano, garlic, Maras pepper (or cayenne and paprika), salt, and pepper. Gradually whisk in the olive oil.",
        "Scoop out and set aside 1/4 cup of the marinade to use when serving. Add the chicken pieces to the bowl with the remaining marinade. Cover and refrigerate for 30 minutes, or for up to 2 hours. (Longer is better if you have time!)",
        "In a small bowl, whisk the tahini and yogurt together until smooth. Stir in 3 teaspoons of lemon juice, salt and pepper. Taste and add more lemon juice, salt, or pepper as needed.",
        "If cooking on an outdoor grill, soak 6 bamboo skewers in warm water (or use metal skewers).",
        "To cook the chicken on a grill: Light a charcoal grill or turn a gas grill to medium-high. Oil the grates before grilling. Thread the chicken pieces on metal or soaked bamboo skewers while the grill is heating.",
        "On the hot grill pan or on the outdoor grill, warm the pita bread for a minute or two, turning once, until slightly puffed and warm to the touch.",
        "Spread each pita with 2 tablespoons or more of the yogurt sauce, to taste. Top each with a quarter of the chicken pieces, tomatoes, cucumber, onion, arugula, and mint. Drizzle with a few spoonfuls the reserved marinade and serve."
    ],
    story: "Grilled or griddled, this meal always brings back memories of blue skies, the sea, and carefree Greek vacations. This is going to be on the menu all summer long."
}, {
    difficulty: 5,
    time: 0.75,
    recipeTitle: "Baked Feta Pasta",
    type: "Lunch",
    selection: "Vegan",
    culture: "Hispanic",
    calories: "Low Calories",
    ingredients: ["2 pt. cherry or grape tomatoes",
        "1 shallot, quartered",
        "3 cloves garlic, smashed (optional)",
        "1/2 c. extra virgin olive oil, divided",
        "Kosher salt",
        "Crushed red pepper flakes",
        "1 (8-oz.) block feta",
        "3 sprigs thyme",
        "10 oz. pasta",
        "Zest of 1 lemon (optional)"
    ],
    instruction: [
        "Preheat oven to 400°. In a large ovenproof skillet or medium baking dish, combine tomatoes, shallot, garlic, and most of the olive oil. Season with salt and red pepper flakes and toss to combine. ",
        "Place feta into center of tomato mixture and drizzle top with remaining olive oil. Scatter thyme over tomatoes. Bake for 40 to 45 minutes, until tomatoes are bursting and feta is golden on top.",
        "Meanwhile, in a large pot of salted boiling water, cook pasta according to package instructions. Reserve ½ cup pasta water before draining.",
        "To skillet with tomatoes and feta, add cooked pasta, reserved pasta water, and lemon zest (if using) to skillet and stir until completely combined. Garnish with basil before serving."
    ],
    story: ""
}, {
    difficulty: 3.2,
    time: 2,
    type: "Snack",
    selection: "Vegetarian",
    culture: "Hispanic",
    calories: "Low Calories",
    recipeTitle: "recipeTitle Name",
    calories: "Low Calories",
    instruction: [],
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    story: ""
}, {
    difficulty: 4.5,
    time: 3.6,
    recipeTitle: "recipeTitle Name",
    type: "Snack",
    selection: "Vegetarian",
    culture: "Asian",
    calories: "High Calories",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    instruction: [],
    story: ""
}, {
    difficulty: 1,
    time: 5.6,
    recipeTitle: "5.6 Hour Recipe",
    type: "Snack",
    selection: "Vegan",
    culture: "Hispanic",
    calories: "High Calories",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    instruction: [],
    story: ""
}, {
    difficulty: 3,
    time: 0.4,
    type: "Side Dish",
    selection: "Keto",
    recipeTitle: "0 Recipe",
    culture: "Asian",
    calories: "Medium Calories",
    ingredients: ["butter", "toast", "eggs", "sausage", "salt", "pepper"],
    instruction: [],
    story: ""
}, {
    difficulty: 2,
    time: 6.5,
    type: "Side Dish",
    selection: "Keto",
    recipeTitle: "Slow-Cooker Chicken Pozole",
    culture: "Asian",
    calories: "Medium Calories",
    ingredients: ["4 c. low-sodium chicken broth",
        "3 boneless skinless chicken breasts",
        "2 poblano peppers, chopped",
        "1 white onion, chopped",
        "2 cloves garlic, minced",
        "1 tbsp. cumin",
        "1 tbsp. oregano",
        "2 tsp. chili powder",
        "2 tsp. kosher salt",
        "Freshly ground black pepper",
        "2 (15-oz) cans hominy, drained and rinsed",
        "Thinly sliced radishes, for garnish"
    ],
    instruction: [
        "Place all ingredients except hominy and garnishes into the slow cooker. Cook on low for 6 to 8 hours, until the chicken is tender and cooked through.",
        "Take chicken out of slow cooker and shred with two forks. Return to the slow cooker along with the hominy and cook for another 30 minutes.",
        "Serve soup into bowls and garnish with radish, cabbage and cilantro."
    ],
    story: ""
}];