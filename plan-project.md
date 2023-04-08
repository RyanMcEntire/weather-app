### DATA

- Function fetches data from API
- Flag for america
- Functions that process JSON into object with the data I want
  - create two objects
    - weather C
    - weather F

### CONTROL

- function to get data from input and call the API function
- function to get data from unit switch and call american flag function
- function to take weather object and create dom object
  - if flag america generate dom object F
  - else generate dom object C

### UI

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
