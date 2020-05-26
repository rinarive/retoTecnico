

const card = document.getElementById("root"); 


let searchPeli = document.getElementById('search').addEventListener('click', (e) => {

fetch("https://randomuser.me/api/?results=20")
  .then(datos => datos.json() )
  .then(data=>{
    console.log(data)

    let search = data.results

   search.forEach(element => {
     
      card.innerHTML= `
      <div class="cardContainer">
      <div class="card" id="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${element.picture.large}" alt="Placeholder image">
          </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <p class="title is-4">${element.name.first}  ${element.name.last}</p>
          <p class="subtitle is-5">De: ${element.location.country}</p>
          <p class="subtitle is-6">${element.gender}</p>
          <p class="subtitle is-6">Telefono: ${element.cell}</p>
        </div>
      </div>
      </div>
      </div>
      </div>
      ` 
    
  });

})
.catch(error=>console.log(error))

})




   
