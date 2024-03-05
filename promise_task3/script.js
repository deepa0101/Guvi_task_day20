

async function getResponse(){
    const input = document.getElementById("search");
    inputValue = input.value;
try
        {
        let url = `https://api.datamuse.com/words?rel_hom=${inputValue}`
        let req2= await fetch(url);
        const data = await req2.json()
        return data 
    }
    catch(e){
        alert(e)
    }
}
let div= document.createElement("div")
div.setAttribute("class","container")
let div1= document.createElement("div")
async function getHomoPhone(){
    div1.setAttribute("class","transbox col-lg-4 col-md-6 col-sm-12 mb-3")
    div1.innerHTML=""
    let data = await getResponse();
    div1.innerHTML = `<h2>These are the homophones of the searched word</h2>`
   data.forEach(element => {
    let homoPhone = document.createElement("p") 
    homoPhone.innerHTML = `${element.word}`
    div1.appendChild(homoPhone)
   });
   div.appendChild(div1)
   document.body.appendChild(div)
}
