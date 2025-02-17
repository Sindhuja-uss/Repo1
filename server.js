const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

// Load ingredient database
const ingredientData = JSON.parse(fs.readFileSync("./data/ingredients.json"));

app.use(express.static("public"));

app.get("/convert", (req, res) => {
    const ingredient = req.query.ingredient.toLowerCase();
    const quantity = parseFloat(req.query.quantity);

    const foundIngredient = ingredientData.find(item => item.name.toLowerCase() === ingredient);
    
    if (foundIngredient) {
        const grams = quantity * foundIngredient.density;
        res.json({ message: `Converted Weight: ${grams} grams` });
    } else {
        res.json({ message: "Ingredient not found in database!" });
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
