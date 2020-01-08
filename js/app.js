const ui = new UI();
document.addEventListener("DOMContentLoaded", () => {
  ui.showAllPins();
});

const search = document.querySelector("#buscar input");
search.addEventListener("input", e => {
  //console.log(search.value);
  if (search.value.length > 3) {
    ui.getSearchResults(search.value);
  } else {
    ui.showAllPins();
  }
});
