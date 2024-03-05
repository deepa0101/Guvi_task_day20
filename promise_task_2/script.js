async function getPoem(){
try{
        let url = `https://poetrydb.org/author`
        let req2= await fetch(url);
        const data = await req2.json()
        return data 
    }
    catch(e){
        alert(e)
    }
}

async function  createBody(){
        let data = await getPoem();
        let author = data.authors;
        for (let i in author)
        {
            const name = document.createElement("button");
            name.setAttribute("class","transbox")
            name.setAttribute("id",`${author[i]}`)
            name.style.textAlign="center"
            name.innerHTML =`${author[i]}`
            document.body.appendChild(name) 
        }    
    }
createBody()
const onClick = (event) => {
     window.location.href = "poemTitles.html"
    localStorage["id"]  =event.target.id;
  }
  window.addEventListener('click', onClick);







/* <a href="./poemTitles.html"> */