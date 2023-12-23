const listaPokemon = document.querySelector("#listaPokemon");
const botonesHead = document.querySelectorAll(".btn-head");
const buscar = document.getElementById("buscar");
const formulario = document.getElementById("formulario");
let URL = "https://pokeapi.co/api/v2/pokemon/";

//recorre la data y atualiza la url hasta 150
for (let i = 1; i <= 151; i++){
    fetch(URL+i)
    .then((response) => response.json())
    .then(data => mostrarPokemon(data))
1   }

//crea los pokemon
function mostrarPokemon(poke){
    let tipos= poke.types.map(type => `
    <p class="${type.type.name}">${type.type.name}</p>`);
    tipos=tipos.join('');

    let pokeId = poke.id.toString()
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
        
    }else if(pokeId.length === 2){
        pokeId = "0" + pokeId;
    }

    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
    <p class="pokemon-id-back">#${pokeId}</p>
    <div class="pokemon-imagen">
        <img src="${poke.sprites.other["official-artwork"].front_default}">
   
        </div>
        <p class="pokemon-nombre">${poke.name}</p>

        <p class="pokemon-id">#${pokeId}</p>
         <div class="pokemon-tipos">
                ${tipos}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}m</p>
                <p class="stat">${poke.weight}kg</p>
            </div>
    
    `;
listaPokemon.append(div);  

}


    listaPokemon.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
            .then((response) => response.json())
            .then(data => {

                if(filtrado.value === "ver-todos") {
                    mostrarPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(filtro))) {
                        mostrarPokemon(data);
                    }
                }

            });
        }

        botonesHead.forEach(boton => boton.addEventListener("click", (event) => {
            const botonId = event.currentTarget.id;
        
            listaPokemon.innerHTML = "";
        
            for (let i = 1; i <= 151; i++) {
                fetch(URL + i)
                    .then((response) => response.json())
                    .then(data => {
        
                        if(botonId === "ver-todos") {
                            mostrarPokemon(data);
                        } else {
                            const tipos = data.types.map(type => type.type.name);
                            if (tipos.some(tipo => tipo.includes(botonId))) {
                                mostrarPokemon(data);
                            }
                        }
        
                    })
            }
        }))
        
       /* formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            const buscarObj = buscar.nodeValue;
            */