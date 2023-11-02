/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  return timer || timer >= 0 ? timer === 0 ? 'Lasagna is done.' : 'Not done, please wait.' : 'You forgot to set the timer.'; 
}

export function preparationTime(layers, time){
  const multiply = time ?? 2;
  return layers.length * multiply;
}

export function quantities(layers){
  let sauce = 0;
  let noodles = 0;
  for (const layer in layers) {
    if (Object.hasOwnProperty.call(layers, layer)) {
      if (layers[layer] == 'sauce'){
        sauce += 0.2;
      }
      if (layers[layer] == 'noodles'){
        noodles += 50;
      }
    }
  }
  return { sauce, noodles };
}

export function addSecretIngredient(friendsList, myList){
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions){
  let newRecipe = JSON.parse(JSON.stringify(recipe));
  for (const item in recipe) {
    if (Object.hasOwnProperty.call(newRecipe, item)) {
      newRecipe[item] = newRecipe[item] * (portions/2);
    }
  }
  return newRecipe;
}