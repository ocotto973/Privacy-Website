let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
let containerDiv = document.querySelector(".signatures");
let sigDiv = document.createElement('div');
sigDiv.classList.add("signatures");
containerDiv.appendChild(sigDiv);

let signbutton = document.getElementById("sign-now-button");
const addSignature = () => {
    let name =document.getElementById("name").value;
    let town =document.getElementById("town").value;
    let email =document.getElementById("email").value;
    let newSigDiv = `<div class="signatures">
        <p>🖊️ ${name} from ${town} supports this.</p>
        </div>`;
    sigDiv.insertAdjacentHTML("beforeend",newSigDiv);
}
// Add a click event listener to the sign now button here
//document.getElementById("sign-now-button").addEventListener("click",addSignature);


// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs
for (let i = 0; i < petitionInputs.length; i++) {
  if (petitionInputs[i].value.length < 2) {
    containsErrors = true;
    petitionInputs[i].classList.add('error');
  }
  else{
     petitionInputs[i].classList.remove('error');
  }
}  
  // TODO: Validate the value of each input



  // TODO: Call addSignature() and clear fields if no errors
   if(containsErrors == false){
    addSignature();
    petitionInputs[i].value = "";
    containsErrors = false;
  }

}

document.getElementById("sign-now-button").addEventListener("click",validateForm);

//const URL = "https://openlibrary.org/works/OL25186762W/Data_Privacy";
//onst OLID = "OL34629659M";


const getBooks = () => {
  const proxyURL = "https://cp-proxy1.herokuapp.com/";
  const olQueryURL = "https://openlibrary.org/works/";
  const bookId = "OL34629659M";
  const privacyURL = proxyURL + olQueryURL + bookId + ".json";
fetch(privacyURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
});
  }
getBooks();


const apiKey = "6WEOmFQV_-nCpQ6uIMgN3ltw8qZL32cPraAkPh55d2c5SkYE";
const keywords = 'Data Privacy';
const url = 'https://api.currentsapi.services/v1/search?apiKey=' + apiKey + '&keywords=' + keywords;

const getAndDisplayNews = async () => {
  // Fetches News articles
const response = await fetch(url);

// Contains JavaScript objects with news articles
const data = await response.json();

// Parses the data and assigns the news article array from the objects
const news = data.news;
  for(let i=0;i<5;i++){
    const title = document.createElement('h3');
    title.textContent = news[i].title;
    const description = document.createElement('p');
    description.textContent = news[i].description;
    const article = document.createElement('article');
    article.appendChild(title);
    article.appendChild(description);
    const newsDiv = document.getElementById('news');
    newsDiv.append(article);
}
}
getAndDisplayNews();
