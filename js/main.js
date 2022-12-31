// // elForm = document.querySelector(".js-form");
// // elArea = document.querySelector(".js-area");
// // elList = document.querySelector(".js-list");

// // elForm.addEventListener("submit", function (evt) {
// //   evt.preventDefault();

// //   for (item of elArea.value.split(",")) {
// //     let elItem = document.createElement("li");
// //     elItem.innerHTML = item;
// //     elArea.textContent = elItem;
// //     elList.appendChild(elItem);
// //   }

// //   // elArea.value = '';
// // });

// // -------------------------------------------------------- UY ISHI -----------------------------------------------------------------
// let elHtml = document.querySelector("html");
// elHtml.style.overflowX = "hidden";
// elHtml.style.paddingTop = "300px";
// elHtml.style.paddingRight = "30px";
// elHtml.style.paddingLeft = "30px";
// elHtml.style.backgroundImage =
//   "url('../img/pokemon.png'),linear-gradient(to right,#ff8a00, #e52e71)";
// elHtml.style.backgroundPosition = "top, center";
// elHtml.style.backgroundRepeat = "no-repeat, repeat";
// elHtml.style.backgroundSize = "700px 250px, 100%";

// let elRow = document.querySelector(".row");

// for (i = 0; i < pokemons.length; i++) {
//   let elCol = document.createElement("div");
//   let elBox = document.createElement("div");
//   let elId = document.createElement("p");
//   let elImg = document.createElement("img");
//   let elName = document.createElement("h2");
//   let elType = document.createElement("p");
//   let elHeight = document.createElement("p");
//   let elWeight = document.createElement("p");
//   let elSpawnTime = document.createElement("p");
//   elRow.setAttribute("class", "row");
//   elRow.classList.add("g-5");
//   elRow.style.backgroundImage = "linear-gradient(to right,#ff8a00, #e52e71)";
//   elCol.setAttribute("class", "col-3");
//   elRow.appendChild(elCol);
//   elCol.appendChild(elBox);
//   elBox.classList.add("bg-primary", "p-4", "rounded-4");
//   elBox.appendChild(elId);
//   elBox.appendChild(elImg);
//   elBox.appendChild(elName);
//   elBox.appendChild(elType);
//   elBox.appendChild(elHeight);
//   elBox.appendChild(elWeight);
//   elBox.appendChild(elSpawnTime);
//   elId.innerHTML = pokemons[i].id;
//   elId.classList.add("h4", "text-center", "text-white");
//   elImg.setAttribute("src", pokemons[i].img);
//   elImg.setAttribute("class", "d-block mx-auto");
//   elName.innerHTML = pokemons[i].name;
//   elName.classList.add("text-warning", "text-center");
//   elType.innerHTML = pokemons[i].type;
//   elType.classList.add("h5", "text-danger", "text-center");
//   elHeight.innerHTML = pokemons[i].height;
//   elHeight.classList.add("h5", "text-center", "text-light");
//   elWeight.innerHTML = pokemons[i].weight;
//   elWeight.classList.add(
//     "fs-5",
//     "fw-semibold",
//     "text-center",
//     "text-warning",
//     "text-opacity-75"
//   );
//   elSpawnTime.innerHTML = pokemons[i].spawn_time;
//   elSpawnTime.classList.add(
//     "h6",
//     "text-white",
//     "bg-secondary",
//     "d-inline-block",
//     "p-2",
//     "rounded-2"
//   );
// }

// elForm = document.querySelector(".js-form");
// elArea = document.querySelector(".js-area");
// elList = document.querySelector(".js-list");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   for (item of elArea.value.split(",")) {
//     let elItem = document.createElement("li");
//     elItem.innerHTML = item;
//     elArea.textContent = elItem;
//     elList.appendChild(elItem);
//   }

//   // elArea.value = '';
// });

// -------------------------------------------------------- UY ISHI -----------------------------------------------------------------

let elHtml = document.querySelector("html");
elHtml.style.overflowX = "hidden";
elHtml.style.paddingTop = "300px";
elHtml.style.paddingRight = "30px";
elHtml.style.paddingLeft = "30px";
elHtml.style.backgroundImage =
  "url('../images/pokemon.png'),linear-gradient(to right,#ff8a00, #e52e71)";
elHtml.style.backgroundPosition = "top, center";
elHtml.style.backgroundRepeat = "no-repeat, repeat";
elHtml.style.backgroundSize = "700px 250px, 100%";

let elSelect = document.querySelector(".js-select");
let elBookmarkList = document.querySelector(".bookmark-list");
let elRow = document.querySelector(".row");

let pokemonsTypes = [
  "Grass",
  "Fire",
  "Water",
  "Bug",
  "Normal",
  "Poison",
  "Electric",
  "Ground",
  "Fighting",
  "Psychic",
  "Rock",
  "Ghost",
  "Ice",
  "Dragon",
  "Flying",
];

const bookmarkList = new Set();

let filteredPokemons = pokemons;

for (let j of pokemonsTypes) {
  let option = document.createElement("option");
  option.value = j;
  option.textContent = j;
  elSelect.appendChild(option);
}

elSelect.addEventListener("change", (el) => {
  let type = el.target.value;
  if (type == "All") {
    return displayPokemons(pokemons, elRow);
  }
  filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.type.includes(type);
  });
  displayPokemons(filteredPokemons, elRow);
});

displayPokemons(filteredPokemons, elRow);

function displayPokemons(array, node) {
  node.innerHTML = "";
  for (i = 0; i < array.length; i++) {
    let elCol = document.createElement("div");
    let elBox = document.createElement("div");
    let elId = document.createElement("p");
    let elImg = document.createElement("img");
    let elName = document.createElement("h2");
    let elType = document.createElement("p");
    let elHeight = document.createElement("p");
    let elWeight = document.createElement("p");
    let elSpawnTime = document.createElement("p");
    let elBookmarkBtn = document.createElement("button");

    node.appendChild(elCol);
    elCol.appendChild(elBox);
    elBox.appendChild(elId);
    elBox.appendChild(elImg);
    elBox.appendChild(elName);
    elBox.appendChild(elType);
    elBox.appendChild(elHeight);
    elBox.appendChild(elWeight);
    elBox.appendChild(elSpawnTime);
    elBox.appendChild(elBookmarkBtn);

    elId.innerHTML = array[i].id;
    elSpawnTime.innerHTML = array[i].spawn_time;
    elBookmarkBtn.dataset.pokemonId = array[i].id;

    node.setAttribute("class", "row");
    node.classList.add("g-5");
    elCol.setAttribute("class", "col-3");
    elBox.classList.add("bg-primary", "p-4", "rounded-4");
    elId.classList.add("h4", "text-center", "text-white");
    elImg.setAttribute("src", array[i].img);
    elImg.setAttribute("class", "d-block mx-auto");
    elName.innerHTML = array[i].name;
    elName.classList.add("text-warning", "text-center");
    elType.innerHTML = array[i].type;
    elType.classList.add("h5", "text-danger", "text-center");
    elHeight.innerHTML = array[i].height;
    elHeight.classList.add("h5", "text-center", "text-light");
    elWeight.innerHTML = array[i].weight;
    elWeight.classList.add(
      "fs-5",
      "fw-semibold",
      "text-center",
      "text-warning",
      "text-opacity-75"
    );
    elSpawnTime.classList.add(
      "h6",
      "text-white",
      "bg-secondary",
      "d-inline-block",
      "p-2",
      "rounded-2"
    );
    elBookmarkBtn.setAttribute(
      "class",
      "js-bookmark-btn bg-transparent border-0 d-inline-block"
    );

    node.style.backgroundImage = "linear-gradient(to right,#ff8a00, #e52e71)";
    elBookmarkBtn.style.backgroundImage = "url('../images/bookmark.svg')";
    elBookmarkBtn.style.backgroundPosition = "center";
    elBookmarkBtn.style.backgroundRepeat = "no-repeat";
    elBookmarkBtn.style.backgroundSize = "40px";
    elBookmarkBtn.style.padding = "20px";
  }
}

const elSelect2 = document.querySelector(".js-select-two");
elSelect2.addEventListener("change", () => {
  if (elSelect2.value != "id") {
    if (elSelect2.value == "A--Z") {
      const POKEMONS__SORT = pokemons.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      displayPokemons(POKEMONS__SORT, elRow);
    }
    if (elSelect2.value == "Z--A") {
      const POKEMONS__SORT = pokemons.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
      displayPokemons(POKEMONS__SORT, elRow);
    }
  }
});

const settedBookmark = (arr, node) => {
  node.innerHTML = "";
  arr.forEach((el) => {
    const newItem = document.createElement("li");
    const newTitle = document.createElement("h4");
    const newDeleteBtn = document.createElement("button");

    newTitle.innerHTML = el.name;
    newDeleteBtn.innerHTML = "&times;";

    newItem.setAttribute(
      "class",
      "d-flex align-items-center me-2 bg-primary p-2"
    );
    newTitle.setAttribute("class", "d-inline-block m-0");
    newDeleteBtn.setAttribute("class", "js-delete-btn bg-danger border-0 ms-2");
    newDeleteBtn.dataset.pokemonId = el.id;

    node.appendChild(newItem);
    newItem.appendChild(newTitle);
    newItem.appendChild(newDeleteBtn);
  });
};

elRow.addEventListener("click", (evt) => {
  if (evt.target.matches(".js-bookmark-btn")) {
    const pokemonId = evt.target.dataset.pokemonId;
    
    const findedPokemon = pokemons.find((el) => el.id == pokemonId);
    
    bookmarkList.add(findedPokemon);
  }
  settedBookmark(bookmarkList, elBookmarkList);
});

elBookmarkList.addEventListener("click", (evt) => {
  if (evt.target.matches(".js-delete-btn")) {
    const pokemonId = evt.target.dataset.pokemonId;

    const findedPokemon = pokemons.find((el) => el.id == pokemonId);

    bookmarkList.delete(findedPokemon);

  }
  settedBookmark(bookmarkList, elBookmarkList);
});
