

const searchInput = document.querySelector("[data-search]")
let users = [];


searchInput.addEventListener('input',(e) => {
   const value = e.target.value.toLowerCase()
      users.forEach(element => {
         const isVisible =
         element.name.toLowerCase().includes(value) ||
         element.email.toLowerCase().includes(value)||
         element.gender.toLowerCase().includes(value)||
         element.city.toLowerCase().includes(value)
         element.template.classList.toggle("hideElement", !isVisible);
      })

})