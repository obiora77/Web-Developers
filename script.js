const menuicon = document.getElementById('menu-icon')

const navLinks = document.getElementById('nav-link')

menuicon.addEventListener('click', () => {
   navLinks.classList.toggle('show')

   const listIcon = document.querySelector('.bi-list');
   const closeIcon = document.querySelector('.bi-x-lg');
   if (navLinks.classList.contains('show')) {
      listIcon.style.display = 'none';
      closeIcon.style.display = 'block';
   } else {
      listIcon.style.display = 'block';
      closeIcon.style.display = 'none';
   }
})

$(function() {
   var availableCountries = [
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
      "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
      "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
      "Denmark", "Djibouti", "Dominica", "Dominican Republic",
      "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia",
      "Fiji", "Finland", "France",
      "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
      "Haiti", "Honduras", "Hungary",
      "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
      "Jamaica", "Japan", "Jordan",
      "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan",
      "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
      "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
      "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia (formerly Macedonia)", "Norway",
      "Oman",
      "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
      "Qatar",
      "Romania", "Russia", "Rwanda",
      "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria",
      "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
      "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
      "Vanuatu", "Vatican City (Holy See)", "Venezuela", "Vietnam",
      "Yemen",
      "Zambia", "Zimbabwe"
   ];
   $("#country").autocomplete({
      source: availableCountries
   });
});
 
const searchInput = document.querySelector("[data-search]")
let users = [];

searchInput.addEventListener("input", (e) => {
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

async function fetchData (){
   let myFetch = await fetch("https://randomuser.me/api/?results=51",{
       method:'GET',
       headers:{"content-Type":'application/json'}
   });

   let json = await myFetch.json();
   let results = json.results;

   users = results.map(element => {
       let template = document.querySelector('[data-template="userTemplate"]').content.cloneNode(true).children[0];
       let profileImage = template.querySelector('[data-profileimage]').src = element.picture.medium;
       let profileName = template.querySelector('[data-name]').textContent = element.name.first;
       let profileCity = template.querySelector('[data-city]').textContent = element.location.city;
       let profileEmail = template.querySelector('[data-email]').textContent = element.email;
       let profileGender = template.querySelector('[data-gender]').textContent = element.gender;
       let profileDob = template.querySelector('[data-dob]').textContent = element.dob.date;
       let plink = template.querySelector('[data-id]').href = "";
       // console.log(element);

       document.querySelector('[data-demo]').append(template);
       return {
               name:element.name.first,
               email:element.email,
               city:element.location.city,
               gender:element.gender, 
               template:template
            }
   });

}

fetchData()


let scroller = ['scroll-from-left','scroll-from-right','scroll-from-bottom']
let element = document.querySelectorAll('.slider')
let j = 0
document.body.onscroll = function () {
   // let mainHeight = document.querySelector(".slid").getBoundingClientRect().height;
   // let mainHeights = document.querySelector(".web-dev").getBoundingClientRect().height;
   for (let i = 0; i < element.length; i++,j++) {
      const elements = element[i]
      if (j >= 3) {
         j= 0
      }
      let height = elements.getBoundingClientRect().top;

      if (height < (window.innerHeight || document.documentElement.clientHeight)){
         elements.classList.add(""+ elements.dataset.scroll)
         console.log(elements);

      } 
   }
}

