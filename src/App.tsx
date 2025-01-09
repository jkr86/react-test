import React, { useState, useEffect } from "react";
import { TagProvider, useTagContext } from "./store/TagContext";
import { TagList } from "./Tagfilter/ListeDesTags";
import Recipes from "./Recipes/Recipes";
import { allRecipes, sugarRecipes, summerRecipes, dessertRecipes, chocolateRecipes, autumnRecipes, veganRecipes } from "./Recipes/RecipeData";
import { tagList } from "./Tags/TagData";
import { all_filters } from "./helpers/data";
import { SelectedTagsHeader } from "./Tags/SelectedTags";

// Add on-page filters to the filter list
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
    const [selected_filter, setFilter] = useState<string>("all");
    const { selectedTags, addTag, removeTag } = useTagContext();

    // Filter recipes based on selected tags
    const filteredRecipes = (recipes: any[]) => {
        if (selectedTags.length === 0) return recipes; // No tags selected, show all recipes

        return recipes.filter((recipe) => {
            // Check if any selected tag is in the recipe's tags or ingredients
            return selectedTags.every((tag) => {
                // Check if the tag is in the recipe's tags
                const isInTags = recipe.tags.some((recipeTag: any) => recipeTag.id === tag);
                // Check if the tag is in the recipe's ingredients (name or names)
                const isInIngredients = recipe.ingredients.some((ingredient: any) => ingredient.name === tag);

                return isInTags || isInIngredients; // Show recipe if tag is in either tags or ingredients
            });
        });
    };

    useEffect(() => {
        if (selectedTags.length === 0) {
            setFilter("all");
        }
    }, [selectedTags]);

    // Handle on-page filter click (add/remove from selectedTags)
    const handleFilterClick = (filter: string) => {
        if (!selectedTags.includes(filter)) {
            addTag(filter); // Add filter tag if not already selected
        } else {
            removeTag(filter); // Remove filter tag if already selected
        }
    };

    // Render selected filter based on selected_tags
    const getFilteredRecipes = () => {
        const selectedFilterItem = onpage_filters.find((item) => item.filter === selected_filter);
        return selectedFilterItem ? filteredRecipes(selectedFilterItem.recipes) : [];
    };

    return (
        <div className="App">
            <SelectedTagsHeader />
            <h1 className="mt-4 mb-1">Liste des recettes</h1>
            <TagList tags={tagList} /> {/* Main tags are displayed here */}
            <div className="flex items-center justify-center space-x-4 mt-4 mb-1">
                {all_filters.map(({ filter, label }) => (
                    <div
                        key={filter.fr}
                        onClick={() => handleFilterClick(filter.fr)}
                        className={`${selectedTags.includes(filter.fr) ? "ring-2 ring-green-400" : ""} cursor-pointer bg-green-200 h-7 rounded-full flex items-center justify-center`}
                    >
                        <button aria-label="small badge" className="focus:ring-2 focus:outline-none focus:ring-green-400 rounded-full flex items-center justify-around h-full w-full px-4">
                            <span className="text-sm text-green-700 font-normal">{label}</span>
                        </button>
                    </div>
                ))}
            </div>
            <Recipes recipes={getFilteredRecipes()} />
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

