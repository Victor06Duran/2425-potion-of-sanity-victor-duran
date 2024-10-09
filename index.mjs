//################################
//#            INDEX             #
//################################
import { getData }  from './src/service.mjs';
import Ingredients  from './src/ingredients.mjs';
import Cauldron     from './src/cauldron.mjs';
// import { Potion }   from './src/potion.mjs'; 
//################################

const showIngredients = (ingredients) => {
    ingredients.ingredients.forEach(ingredient => {
        console.log(`Ingredient: ${ingredient.name}`);
        ingredient.effects.forEach(effect => {
            console.log(`  Effect: ${effect.name} (${effect.type})`);
        });
        console.log(`  Weight: ${ingredient.weight}, Value: ${ingredient.value}`);
    });
};

const showPotion = (potion) => {
    console.log(`${potion.name}`);
    console.log(`Value:     ${potion.value}`);
    console.log(`Weight:    ${potion.weight}`);
    console.log(`Time:      ${potion.time}`);
    console.log('----------------');

};

const execute = async () => {
    try {
        const data = await getData();
        const ingredients = Ingredients.load(data);
        // showIngredients(ingredients);

        const cauldron = new Cauldron(ingredients);
        
        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3);

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);

    } catch (error) {
        console.error("ERROR! --> Cannot execute program", error);
    }
};

execute();
