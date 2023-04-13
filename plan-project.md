### DATA

- Function fetches data from API
- Flag for america
- Functions that process JSON into object with the data I want
  - data I want:
    - current temp
    - day high
    - day low
    - weather quality
    - precipitation
    - wind
    - humidity
  * create two objects
    - weather C
    - weather F

### CONTROL

- function to get data from input and call the API function
- function to get data from unit switch and call american flag function
- function to take weather object and create dom object
  - if flag america generate dom object F
  - else generate dom object C

### UI

- style UI like a linux desktop with a couple terminal programs
  - black screen with green icon/text glow using custom font icons and ascii pictures
- single input form to input city with submit button
- toggle switch between Celsius and Fahrenheit
- display info from weather object

### CLASSES

- process JSON
  - depending on flag
    - invoke method for C object
    - invoke method for F object

### OPTIONAL

- store flag option in local storage

---

- add the rest of the fields i want
  - feelslike x
  - wind speed
  - wind degree
  - wind direction
  - gust
  - precip
  - total precip
  - cloud
  - will it rain
  - will it snow
  - chance of rain
  - chance of snow
- add space for pictures
- add monospace font
