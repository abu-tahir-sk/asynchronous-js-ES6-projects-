# Peddy 

---  Live site link  https://abu-tahir-sk.github.io/asynchronous-js-ES6-projects-/

* ## Description
     A project animals related.this project is about animals.Here are projects related to the sale of various types of animals. Here are projects related to dogs, cats, rabbits, and various types of birds.
* ## 5 Features in projects
 1. Clicking the Category button will take you to a specific category.
  Example: clicking on the dog button will show all dogs. 
 2. sorted: Here, the short is in descending order. Clicking on the short button will suggest animals with different shot prices.
 3. Clicking the Adopt button in this project will cause a countdown.
 4. One of the features of this project is that spinners are shown while data is loading.
 5. Clicking the Like button in this project will arrange the card images in a specific grid format.
 * ## ES6 Features used
 1. Arrow function used ES6.
```Arrow Function 
     const loadCategories = () => {

     };
```
      
 2. let and const
* new ways to declare variables
```examples:
     const a = 1;
```
3. Template Literals (`)
```examples:
const displayCategories = (categories) => {
      const categoryContainer = document.getElementById('category-es')

      //add data in html
     categories.forEach((item) => {
      console.log(item);

      // create button
      const button = document.createElement('div');
      button.innerHTML = `
      <div class="flex justify-center items-center gap-2"> 
      <button class="category-btn btn btn-xs sm:btn-sm md:btn-md lg:btn-lg px-3 md:px-10" id="btn-${item.category}" onclick="categoryBtn('${item.category}')"><img class="w-4 md:w-8" src=${item.category_icon}>${item.category}</button>
      
      `;

      // add button to category append
      categoryContainer.append(button);
     });
}
```
4. Spread
```spread:
 const sortedData = [...data.pets].sort((a, b) => {
                 return parseFloat(a.price) - parseFloat(b.price);
            });
```  
5. promises
Handling Promise Outcomes:
.then(): Used to handle the fulfillment of a Promise. It takes up to two arguments: a callback for success (onFulfilled) and an optional callback for failure (onRejected). 
```example:
const loadSortPetsByPrice = () => {
      const spinner = document.getElementById("spinner");
       const petsContainer = document.getElementById('pets-container'); 

       spinner.classList.remove("hidden");
       petsContainer.classList.add("hidden")

      fetch('https://openapi.programming-hero.com/api/peddy/pets')
      .then((res) => res.json())
      .then((data) => {
            const sortedData = [...data.pets].sort((a, b) => {
                 return parseFloat(a.price) - parseFloat(b.price);
            });

            setTimeout(() => {
           spinner.classList.add("hidden")
           petsContainer.classList.remove("hidden")
            displayPets2(sortedData)
        },2000)
            console.log(sortedData)
             
      })
      .catch((err) => console.log(err,'error:'));
      
};
```
* ## Live like to deployed project

https://abu-tahir-sk.github.io/asynchronous-js-ES6-projects-/


