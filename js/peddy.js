
// Fetch, Load and show Categories on html
const loadCategories = () => {
      // fetch the data
      fetch('https://openapi.programming-hero.com/api/peddy/categories')
      .then((res) => res.json())
      .then((data) => displayCategories(data.categories))
      .catch((err) => console.log(err));
}
const loadVideos2 = () => {
      // fetch the data
      fetch('https://openapi.programming-hero.com/api/peddy/pets')
      .then((res) => res.json())
      .then((data) => displayPets2(data.pets))
      .catch((err) => console.log(err));
}

const displayPets2 = (pets) => {
  
      const petsContainer = document.getElementById('pets-container');
       petsContainer.innerHTML = '';

       if(pets.length == 0){
            petsContainer.classList.remove("grid")
            petsContainer.innerHTML = `
            <div class="mx-auto w-11/12 min-h-screen flex flex-col justify-center items-center">
            <img src="./images/error.webp">
            <h2 class="text-3xl font-bold p-3 text-center">No Information Available</h2>
            <p class="text-gray-400 text-center">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
            its layout. The point of using Lorem Ipsum is that it has a.
            </p>
            </div>
            `;
            return;
       }else{
            petsContainer.classList.add("grid");
       }
     
 pets.forEach((pet) => {
 
 console.log(pet);
           
            const card = document.createElement("div");
            card.classList = "border-0 md:border p-2 rounded shadow"
            card.innerHTML = `
             <figure>
    <img id="dddd" class="rounded w-full"
      src=${pet.image} />
  </figure>
  <div class="card">
    <div class="py-2 border-b  pl-2 md:pl-0">
    <h2 class="card-title py-1">
      ${pet.pet_name}
    </h2>
     ${pet.breed ? `<p class="text-gray-400"><i class="fa-solid fa-layer-group"></i> Breed: ${pet.breed}</p>` : `<p class="text-gray-400"><i class="fa-solid fa-layer-group"></i> Breed: No Data</p>`}
    
    ${pet.date_of_birth ? `<p class="text-gray-400"><i class="fa-solid fa-cake-candles"></i> Birth: ${pet.date_of_birth}</p>` : `<p class="text-gray-400"><i class="fa-solid fa-cake-candles"></i> Birth: No birth dey</p>`}
    ${pet.gender ?  `
    <p class="text-gray-400"><i class="fa-solid fa-venus"></i> Gender: ${pet.gender}</p>` : `<p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> Gender : No Available</p>`}
   ${pet.price ?  `
    <p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> price: ${pet.price}</p>` : `<p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> price: Free</p>`}
    </div>
    <div class="flex justify-center py-2 gap-3">
      <button onclick="loadLike('${pet.petId}')" class="btn btn-sm" ><i class="fa-regular fa-thumbs-up"></i></button>

      <button class="btn btn-sm text-[#0E7A81] adopt-btn">Adopt</button>

      <button class="btn btn-sm text-[#0E7A81] font-bold" onclick="loadDetails('${pet.petId}')">Details</button>
    </div>
  </div>
            `;

        petsContainer.append(card); 
             
});

};

const loadLike = async(petLike) => {
      console.log(petLike);
      const url =`https://openapi.programming-hero.com/api/peddy/pet/${petLike}`;
      const res = await fetch(url);
     const data = await res.json();
     displayLike(data.petData);
};
const displayLike = (petData) =>{
      const likeContainer = document.getElementById('like-btn')

     const img = document.createElement('img');
      img.src = petData.image;
      img.alt = petData.pet_name || 'Pet';
      img.className = 'rounded shadow w-full';

       likeContainer.appendChild(img);

  if(window.innerWidth <= 768){
      likeContainer.classList.add("hidden")
  }else{
       likeContainer.classList.remove("hidden")
  }
  
 
 
} 
const loadDetails = async(petId) => {
      console.log(petId);
     const url =`https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
     const res = await fetch(url);
     const data = await res.json();
     displayDetails(data.petData);
}

const displayDetails = (petData) => {
      const modalContainer = document.getElementById('modal-container');

      modalContainer.innerHTML = `
      <img class="w-full" src=${petData.image} />
       <h2 class="card-title py-1">
      ${petData.pet_name}
    </h2>
    <p class="text-gray-400"><i class="fa-solid fa-layer-group"></i> Breed: ${petData.breed}</p>
    <p class="text-gray-400"><i class="fa-solid fa-cake-candles"></i> Birth: ${petData.date_of_birth}</p>
    <p class="text-gray-400"><i class="fa-solid fa-venus"></i> Gender: ${petData.gender}</p>
    <p class="text-gray-400"><i class="fa-solid fa-venus"></i> Gender: ${petData.vaccinated_status}</p>
    <p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> price: ${petData.price}</p>
    <h2 class="card-title py-1">
      Details Information
    </h2>
    <p class="text-gray-400"><i class="fa-solid fa-dollar-sign"></i> price: ${petData.pet_details}</p>

      `; 

      document.getElementById('detailsModal').showModal();
};

const removeActiveClass = () => {
      const buttons = document.getElementsByClassName("category-btn");
      console.log(buttons);
      for(let btn of buttons){
            btn.classList.remove("active"); 
      }
};

const categoryBtn = (id) => {
     
      fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
      .then((res) => res.json())
      .then((result) => {
           removeActiveClass();

            const activeBtn = document.getElementById(`btn-${id}`);
             
           activeBtn.classList.add("active");
            displayPets2(result.data);
      })
      .catch((err) => console.log(err));
      
}

// createDisplay categories 
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






// const loadAdopt = () => {
//       document.getElementById('adopt-btn')
//      let time = 3000;
//      const countdown = setInterval(() => {
//       const seconds = time % 60;

//       document.getElementById('seconds').innerHTML = `
      
//       `
//      },3000)
//      if(time <= 0){
//       clearInterval(countdown);
//       document.getElementById("countdown").innerHTML = '';
//      }
// };


loadCategories();

loadVideos2();