    
let link = "https://randomuser.me/api/?results=20"
fetch(link)
  .then(datos => datos.json())
  .then(person=>{
      if(indice <4){
  console.log(person.picture.large)
      first.innerHTML +=`
      <div class="col-md-3">
      <img class="card-img-top w-100" src="${person.picture.large}" alt="Card image cap">
      </div>
      `
    }})
  .catch(error=>console.log(error))


// FUNCION PARA ORDENAR POR ROL
export const sortData = (arrayData, sortBy) => {
let result = [];
if (sortBy === 'az') {
result = arrayData.sort((a, b) => a.id.localeCompare(b.id));
} else if (sortBy === 'za') {
result = arrayData.sort((a, b) => b.id.localeCompare(a.id));
} else {
result = arrayData;
}
return result;
};

// FUNCION PARA ORDENAR POR AZ - ZA
const sortBy = (sortAz) => {
    contenedor.innerHTML = '';
    const result = sortData(arrayData, sortAz);
    // eslint-disable-next-line array-callback-return
    result.map((element) => {
      contenedor.innerHTML += `<div class="elementos" id="${element.id}">
      <img class="img" src="${element.splash}">
      <h1 class="name">${element.name}</h1>
      <h2 class"titulo"> Rol: ${element.tags}</h2>
      <h3 class"titulo">${element.title}</h3>
      <p class"titulo"> HP: ${element.stats.hp} ❤️ </p>
      </div>`;
      // eslint-disable-next-line array-callback-return
      result.map((i) => {
        if (document.getElementById(i.id) != null) {
          document.getElementById(i.id).addEventListener('click', () => showModal(element));
        }
      });
    });
  };

  // ORDENAR AZ - ZA (FUNCION SORTBY)
document.getElementById('sortBy').addEventListener('change', () => {
    const value = document.getElementById('sortBy').value;
    sortBy(value);
  });