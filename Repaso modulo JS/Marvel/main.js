function $(selector) {
  return document.querySelector(selector);
}

/* Elementos de funcionalidad */
const $containCard = $(".contain-card");
const $search = $("#search");
const $type = $("#type");
const $searchButton = $("#searchButton");
const $orderBy = $("#orderBy");

/* Elementos del paginado */
const $init = $("#init");
const $prev = $("#prev");
const $next = $("#next");
const $end = $("#end");

/* Variables de control */
let offset = 0;
let type = "characters"; // characters o comics
let orderBy = "name"; // name, -name o modified, -modified
let search = ""; // texto a buscar

// data
let datos = [];

async function getApiData() {
  console.log(
    `https://gateway.marvel.com/v1/public/${type}?ts=1&apikey=b12fca5797dace8ec304dad57853fa4a&hash=3957ae696d932f9a23ee93832d3e0aaa&offset=${offset}&orderBy=${orderBy}${
      search && `&${type == "comics" ? "title" : "name"}StartsWith=${search}`
    }`
  );
  // try {
  //   const response = await fetch(
  //     `https://gateway.marvel.com/v1/public/${type}?ts=1&apikey=b12fca5797dace8ec304dad57853fa4a&hash=3957ae696d932f9a23ee93832d3e0aaa&offset=${offset}&orderBy=${orderBy}${
  //       search && `&${type == "comics" ? 'title' : 'name'}StartsWith=${search}`
  //     }`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   datos = data.data.results;
  // } catch (error) {
  //   console.log(error);
  // }

  renderCards();
}

function renderCards() {
  $containCard.innerHTML = "";
  datos.forEach((character) => {
    $containCard.innerHTML += `<div onClick="getDetalleData(${character.id})">${character.name}</div>`;
  });
}

$orderBy.onchange = function (e) {
  if (type == "comics" && e.target.value == "name") {
    orderBy = "title";
    return;
  } else if (type == "comics" && e.target.value == "-name") {
    orderBy = "-title";
    return;
  } else {
    orderBy = e.target.value;
  }
  console.log(orderBy);
};

$type.onchange = function (e) {
  type = e.target.value;
  if (type == "comics" && orderBy == "name") {
    orderBy = "title";
    return;
  } else if (type == "comics" && orderBy == "-name") {
    orderBy = "-title";
    return;
  } else {
    orderBy = "name";
  }
  console.log(orderBy);
};

$search.onchange = function (e) {
  search = e.target.value;
};

$searchButton.onclick = function (e) {
  getApiData();
};

$prev.onclick = function (e) {
  offset -= 20;
  getApiData();
};

$next.onclick = function (e) {
  offset += 20;
  getApiData();
};

window.addEventListener("load", () => {
  getApiData();
});

function getDetalleData(id) {
  try {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/${type}/${id}`
    );
    const data = await response.json();
    console.log(data);
    datos = data.data.results;
  } catch (error) {
    console.log(error);
  }
}