export default class MyWeather {
  constructor(data) {
    this.city = data.location.name;
    this.country = data.location.country;
    this.temp = { amer: data.current.temp_f, else: data.current.temp_c };
    this.wind = { amer: data.current.wind_mph, else: data.current.wind_kph };
  }
}
