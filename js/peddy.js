
// Fetch, Load and show Categore on html
const loadCategories = () => {
      // fetch the data
      fetch('https://openapi.programming-hero.com/api/peddy/categories')
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories))
      .catch((err) => console.log(err));
}

const loadVideos = () => {
      // fetch the data
      fetch('https://openapi.programming-hero.com/api/peddy/pets')
      .then((res) => res.json())
      .then((data) => displayPets(data.pets))
      .catch((err) => console.log(err));
}
// const d = {
//       breed
// :
// "Bengal"
// category
// : 
// "Cat"
// date_of_birth
// : 
// "2022-11-10"
// gender
// : 
// "Male"
// image
// : 
// "https://i.ibb.co.com/QXbXctF/pet-7.jpg"
// petId
// : 
// 7
// pet_details
// : 
// "This male Bengal cat, born on November 10, 2022, is energetic and playful. He loves exploring, climbing, and playing with interactive toys. Fully vaccinated and priced at $950, he's perfect for anyone looking for an active, intelligent, and lively cat."
// pet_name
// : 
// "Max"
// price
// : 
// 950
// vaccinated_status
// : 
// null
// }
// creatDisplay categories
const displayPets = (pets) => {
      const petsContainer = document.getElementById('pets-container');
      pets.forEach((pet) => {
            console.log(pet)
            const card = document.createElement("div");
            card.classList = "border-0 md:border p-2 rounded"
            card.innerHTML = `
             <figure>
    <img class="rounded w-full"
      src=${pet.image} />
  </figure>
  <div class="card">
    <div class="py-1 border-b">
    <h2 class="card-title py-1">
      ${pet.pet_name}
    </h2>
    <p class="text-gray-400"><i class="fa-solid fa-layer-group"></i> Breed: ${pet.breed}</p>
    <p class="text-gray-400"><i class="fa-solid fa-cake-candles"></i> Birth: ${pet.date_of_birth}</p>
    <p class="text-gray-400"><i class="fa-solid fa-mars-stroke-up"></i> Gender: ${pet.gender}</p>
    <p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> price: ${pet.price}</p>
    </div>
    <div class="flex-none md:flex justify-center py-2 gap-2">
      <button class="btn"><i class="fa-regular fa-thumbs-up"></i></button>
      <button class="btn text-[#0E7A81]">Adopt</button>
      <button class="btn text-[#0E7A81] font-bold">Details</button>
    </div>
  </div>
            `;

        petsContainer.append(card);    

      });
      
}

// creatDisplay categories 
const displayCategories = (categories) => {
      const categoryContainer = document.getElementById('category-es')

      //add data in html
     categories.forEach((item) => {
      console.log(item);
      // create button
      const button = document.createElement('div');
     
      button.innerHTML = `
      <div class="flex justify-center items-center gap-2">
      
      <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg px-3 md:px-10" onclick="categoryBtn()"><img class="w-4 md:w-8" src=${item.category_icon
}>${item.category}</button>
      
      `;

      // add button to category append
      categoryContainer.append(button);
     });
}


loadCategories();
loadVideos();