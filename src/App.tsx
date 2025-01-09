import React, { useState, useEffect } from "react";
import { TagProvider, useTagContext } from "./store/TagContext";
import { TagList } from "./Tagfilter/ListeDesTags";
import Recipes from "./Recipes/Recipes";
import { allRecipes, sugarRecipes, summerRecipes, dessertRecipes, chocolateRecipes, autumnRecipes, veganRecipes } from "./Recipes/RecipeData";
import { tagList } from "./Tags/TagData";
import { all_filters } from "./helpers/data";

const onpage_filters = [
    { filter: "all", recipes: allRecipes },
    { filter: "sugar", recipes: sugarRecipes },
    { filter: "summer", recipes: summerRecipes },
    { filter: "dessert", recipes: dessertRecipes },
    { filter: "chocolate", recipes: chocolateRecipes },
    { filter: "autumn", recipes: autumnRecipes },
    { filter: "vegan", recipes: veganRecipes },
];

const App: React.FC = () => {
    const [filter, setFilter] = useState<string>("all");
    const { selectedTags } = useTagContext();

    // Filter recipes based on selected tags
    const filteredRecipes = (recipes: any[]) => {
        if (selectedTags.length === 0) return recipes; // No tags selected, show all recipes
        return recipes.filter((recipe) => selectedTags.every((tag) => recipe.tags.includes(tag)));
    };

    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilter("all");
        }
    }, [selectedTags]);

    return (
        <div className="App">
            <h1>Liste des recettes</h1>
            <TagList tags={tagList} />
            <div className="flex items-center justify-center space-x-4">
                {all_filters.map(({ filter, label }) => (
                    <button key={filter} onClick={() => setFilter(filter)}>
                        {label}
                    </button>
                ))}
            </div>
            {onpage_filters
                .filter((item) => item.filter === filter)
                .map((item) => (
                    <Recipes key={item.filter} recipes={filteredRecipes(item.recipes)} />
                ))}
        </div>
    );
};

export default function AppWrapper() {
    return (
        <TagProvider>
            <App />
        </TagProvider>
    );
}
