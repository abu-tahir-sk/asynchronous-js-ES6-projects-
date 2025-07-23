const modal = document.getElementById("adoptCountBtn");
const countDown  = document.getElementById("seconds");


document.addEventListener("click", function (e) {
        
    if(e.target.classList.contains("adopt-btn")) {
       let timeLeft = 3;
        e.target.disabled = true;
       modal.showModal();
      countDown.textContent = timeLeft;
      e.target.innerText = "Adopted";

      const interval = setInterval(() =>{
            timeLeft--;
            countDown.textContent = timeLeft;

            if(timeLeft === 0){
                  clearInterval(interval);
                  modal.close();
            }
      },1000)
    }
});

document.getElementById('short-btn')
.addEventListener('click', () =>{
      loadSortPetsByPrice();
});

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

document.getElementById("view-btn").addEventListener('click', () =>{
      loadView()
})

const loadView = () => {
      const spinner = document.getElementById("spinner");
       const petsContainer = document.getElementById('pets-container'); 

       spinner.classList.remove("hidden");
       petsContainer.classList.add("hidden")

       fetch('https://openapi.programming-hero.com/api/peddy/pets')
       .then((res) => res.json())
       .then((data) =>{

            setTimeout(() => {
           spinner.classList.add("hidden")
           petsContainer.classList.remove("hidden")
            displayPets2(sortedData)
        },2000)

            displayPets2(data.pets);

       })
       .catch((err) => console.log(err,'error:'));
}