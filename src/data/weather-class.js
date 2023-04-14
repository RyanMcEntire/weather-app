export default class MyWeather {
  constructor(data) {
    const now = data.current;
    const forecastDay = data.forecast.forecastday[0].day;
    const loc = data.location;
    this.city = loc.name;
    this.region = loc.region;
    this.country = loc.country;
    this.localTime = loc.localtime;
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

  getData(thing) {
    return this[thing];
  }

  getFormatData(format, data) {
    return this[data][format];
  }
}
