// elForm = document.querySelector(".js-form");
// elArea = document.querySelector(".js-area");
// elList = document.querySelector(".js-list");

// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   for (item of elArea.value.split(",")) {
//     var elItem = document.createElement("li");
//     elItem.innerHTML = item;
//     elArea.textContent = elItem;
//     elList.appendChild(elItem);
//   }

//   // elArea.value = '';
// });

// -------------------------------------------------------- UY ISHI -----------------------------------------------------------------
var elHtml = document.querySelector("html");
elHtml.style.overflowX = "hidden";
elHtml.style.paddingTop = "300px";
elHtml.style.paddingRight = "30px";
elHtml.style.paddingLeft = "30px";
elHtml.style.backgroundImage =
  "url('../img/pokemon.png'),linear-gradient(to right,#ff8a00, #e52e71)";
elHtml.style.backgroundPosition = "top, center";
elHtml.style.backgroundRepeat = "no-repeat, repeat";
elHtml.style.backgroundSize = "700px 250px, 100%";

var elRow = document.querySelector(".row");

for (i = 0; i < pokemons.length; i++) {
  var elCol = document.createElement("div");
  var elBox = document.createElement("div");
  var elId = document.createElement("p");
  var elImg = document.createElement("img");
  var elName = document.createElement("h2");
  var elType = document.createElement("p");
  var elHeight = document.createElement("p");
  var elWeight = document.createElement("p");
  var elSpawnTime = document.createElement("p");
  elRow.setAttribute("class", "row");
  elRow.classList.add("g-5");
  elRow.style.backgroundImage = "linear-gradient(to right,#ff8a00, #e52e71)";
  elCol.setAttribute("class", "col-3");
  elRow.appendChild(elCol);
  elCol.appendChild(elBox);
  elBox.classList.add("bg-primary", "p-4", "rounded-4");
  elBox.appendChild(elId);
  elBox.appendChild(elImg);
  elBox.appendChild(elName);
  elBox.appendChild(elType);
  elBox.appendChild(elHeight);
  elBox.appendChild(elWeight);
  elBox.appendChild(elSpawnTime);
  elId.innerHTML = pokemons[i].id;
  elId.classList.add("h4", "text-center", "text-white");
  elImg.setAttribute("src", pokemons[i].img);
  elImg.setAttribute("class", "d-block mx-auto");
  elName.innerHTML = pokemons[i].name;
  elName.classList.add("text-warning", "text-center");
  elType.innerHTML = pokemons[i].type;
  elType.classList.add("h5", "text-danger", "text-center");
  elHeight.innerHTML = pokemons[i].height;
  elHeight.classList.add("h5", "text-center", "text-light");
  elWeight.innerHTML = pokemons[i].weight;
  elWeight.classList.add("fs-5", 'fw-semibold', "text-center", "text-warning", "text-opacity-75")
  elSpawnTime.innerHTML = pokemons[i].spawn_time;
  elSpawnTime.classList.add(
    "h6",
    "text-white",
    "bg-secondary",
    "d-inline-block",
    "p-2",
    "rounded-2"
  );
}

// console.log(pokemons);
