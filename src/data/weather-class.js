export default class MyWeather {
  constructor(data) {
    const now = data.current;
    const forecastDay = data.forecast.forecastday[0].day;
    this.city = data.location.name;
    this.country = data.location.country;
    this.localTime = data.location.localtime;
    this.isDay = now.is_day;
    this.temp = { amer: now.temp_f, else: now.temp_c };
    this.feelsLike = { amer: now.feelslike_f, else: now.feelslike_c };
    this.wind = { amer: now.wind_mph, else: now.wind_kph };
    this.gust = { amer: now.gust_mph, else: now.gust_kph };
    this.precip = { amer: now.precip_in, else: now.precip_mm };
    this.maxTemp = { amer: forecastDay.maxtemp_f, else: forecastDay.maxtemp_c };
    this.minTemp = { amer: forecastDay.mintemp_f, else: forecastDay.mintemp_c };
    this.totalPrecip = {
      amer: forecastDay.totalprecip_in,
      else: forecastDay.totalprecip_mm,
    };
    this.cloud = now.cloud;
    this.willItRain = forecastDay.daily_will_it_rain;
    this.willItSnow = forecastDay.daily_will_it_snow;
    this.chanceOfRain = forecastDay.daily_chance_of_rain;
    this.chanceOfSnow = forecastDay.daily_chance_of_snow;
    this.condition = now.condition.text;
    this.humidity = now.humidity;
  }

  getCity() {
    return this.city;
  }

  getCountry() {
    return this.country;
  }

  getTime() {
    return this.localTime;
  }

  getIsDay() {
    return this.isDay;
  }

  getTemp(format) {
    return this.temp[format];
  }

  getFeelsLike(format) {
    return this.feelsLike[format];
  }

  getWind(format) {
    return this.wind[format];
  }

  getGust(format) {
    return this.gust[format];
  }

  getPrecip(format) {
    return this.precip[format];
  }

  getCondition() {
    return this.condition;
  }

  getMaxTemp(format) {
    return this.maxTemp[format];
  }

  getMinTemp(format) {
    return this.minTemp[format];
  }
}
