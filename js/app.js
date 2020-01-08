const ui = new UI();
document.addEventListener("DOMContentLoaded", () => {
  const map = ui.loadData();
  console.log(ui);
  map.then(result => {
    //console.log(result.results);
    ui.showPin(result.results);
  });
});
