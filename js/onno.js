// const loadVideos = () => {
//       // fetch the data
//       fetch('https://openapi.programming-hero.com/api/peddy/pets')
//       .then((res) => res.json())
//       .then((data) => displayPets(data.pets))
//       .catch((err) => console.log(err));
// }

// const displayPets = (pets) => {
      
//       const petsContainer = document.getElementById('pets-container');
     

//       pets.forEach((pet) => {
//             console.log(pet)
           
//             const card = document.createElement("div");
//             card.classList = "border-0 md:border p-2 rounded"
//             card.innerHTML = `
//              <figure>
//     <img id="dddd" class="rounded w-full"
//       src=${pet.image} />
//   </figure>
//   <div class="card">
//     <div class="py-2 border-b  pl-2 md:pl-0">
//     <h2 class="card-title py-1">
//       ${pet.pet_name}
//     </h2>

//      ${pet.breed ? `<p class="text-gray-400"><i class="fa-solid fa-layer-group"></i> Breed: ${pet.breed}</p>` : `<p class="text-gray-400"><i class="fa-solid fa-layer-group"></i> Breed: No Data</p>`}
    
//     ${pet.date_of_birth ? `<p class="text-gray-400"><i class="fa-solid fa-cake-candles"></i> Birth: ${pet.date_of_birth}</p>` : `<p class="text-gray-400"><i class="fa-solid fa-cake-candles"></i> Birth: No birth dey</p>`}
//     ${pet.gender ?  `
//     <p class="text-gray-400"><i class="fa-solid fa-venus"></i> Gender: ${pet.gender}</p>` : `<p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> price: No Available</p>`}
     

//    ${pet.price ?  `
//     <p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> price: ${pet.price}</p>` : `<p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> price: Free</p>`}

//     </div>
//     <div class="flex justify-center py-2 gap-3">
//       <button class="btn" onclick="loadLike(this)"><i class="fa-regular fa-thumbs-up"></i></button>
//       <button class="btn text-[#0E7A81]">Adopt</button>
//       <button class="btn text-[#0E7A81] font-bold">Details</button>
//     </div>
//   </div>
//             `;

//         petsContainer.append(card);    

//       } );
      
// }

// const loadLike = () => {
//       const likeBtn = document.getElementById('like-btn');


// }

// loadVideos();
