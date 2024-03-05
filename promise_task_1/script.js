async function getInput() {
    let inputValue = document.getElementById("site-search");
    let input = inputValue.value;
    try{
    if(!input){
        alert("please enter some movie name")
    }
    else{
    let url = `https://www.omdbapi.com/?apikey=5138c94b&t=${input}`
    let req= await fetch(url);
    let data = req.json();
    return data
    }}
    catch(e){
      alert(e)
    }

}

const cardElement = document.createElement("div");
async function createCard(){
  cardElement.innerHTML=""
    const element = await getInput();
    cardElement.setAttribute("class", "card ");
    cardElement.style.alignContent="center";
        cardElement.style.marginTop = "10px";
        cardElement.style.marginBottom = "10px";
        cardElement.innerHTML = `
      <div class="card  mb-3 text-center h-100 " style="border-color:white">
        <div class="card-header"><h4>${element.Title}</h4></div>
        <div class="card-body">
          <h5 class="card-title">Actors: ${element.Actors}</h5>
          <p class="card-text">Genre: ${element.Genre}</p>
          <p class="card-text">Type: ${element.Type}</p>
          <p class="card-text">Ratings: ${element.imdbRating} </p>
          <p class="card-text">Awards:${element.Awards}"</p>
        </div>
      </div>
    `;
    document.body.appendChild(cardElement)
}

clearText()
{
    document.getElementById("site-search").value=""
}
