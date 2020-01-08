class UI {
  constructor() {
    // Iniciar el mapa
    this.markers = new L.LayerGroup();
    this.mapa = this.inicializarMapa();
  }

  inicializarMapa() {
    // Inicializar y obtener la propiedad del mapa
    const map = L.map("mapa").setView([19.390519, -99.3739778], 6);
    const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; " + enlaceMapa + " Contributors",
      maxZoom: 18
    }).addTo(map);
    return map;
  }

  async loadData() {
    const response = await fetch(
      "https://api.datos.gob.mx/v1/precio.gasolina.publico"
    );
    const dataJson = await response.json();
    return dataJson;
  }

  showPin(items) {
    this.markers.clearLayers();
    items.forEach(item => {
      const { latitude, longitude, regular, premium, calle } = item;
      const marker = new L.marker([
        parseFloat(latitude),
        parseFloat(longitude)
      ]);
      this.markers.addLayer(marker);
    });
    this.markers.addTo(this.mapa);
  }
}
