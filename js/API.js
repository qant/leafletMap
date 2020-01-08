class API {
  constructor() {
    this.loadData();
  }
  async loadData() {
    const pageSize = 100;
    const url = `https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${pageSize}`;
    const response = await fetch(url);
    const dataJson = await response.json();
    return dataJson;
  }
}
