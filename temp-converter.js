console.log(`hello`)

// Prompt the user to input a Fahrenheit temperature and let them know that we'll convert it to Celsius

let fTemp = Number( prompt(`Enter a temp in farenheit and this will convert it to celsius`)) 
let cTemp = -40
// Create a function called convertToCelsius that takes in the user input (Fahrenheit temperature) and returns the Celsius temperature
// You can use the following calculation to convert a temperature from Fahrenheit to Celsius... celsiusTemp = (fahrenheitTemp - 32) * (5/9)
// const convertToCelsius = () => {
//   cTemp = (fTemp - 32) * (5/9)
//   return alert(cTemp)
// }
// convertToCelsius()



// Create a function called describeTemperature which will take in a Fahrenheit temperature and return a description based on chart in assignment

const convertToCelsius = () => {
  cTemp = (Number(fTemp) - 32) * (5/9)
  if (Number(fTemp) < 32) {
    return alert(`${fTemp} Very Cold`)

  } else if (32 <= Number(fTemp) < 64) {
    return alert(`${cTemp} Cold`)
  } else if (32 <= Number(fTemp) < 64) {
    return alert(`${cTemp} Cold`)


  }

convertToCelsius()

// Send an alert to the user including the Fahrenheit temperature they entered, what that temperature is when it is converted to Celsius, and how that feels.
