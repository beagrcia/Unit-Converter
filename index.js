/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputKey = document.getElementById("inputNum")
const convertBTN = document.getElementById("btn-Submit")
let inputLength = document.getElementById("length")
let inputVolume = document.getElementById("volume")
let inputMass = document.getElementById("mass")
let stringNum = ""
//variable = with value
const feet = 3.2808
const gallon = 0.264172
const pounds = 2.20462
const meter = 0.304
const liters = 4.546
const kilogram = 0.453

convertBTN.addEventListener("click", function(convert){
  //let convertMeter = Math.floor(inputKey.value * feet * 1000) /1000
  const convMeter = inputKey.value * feet
  inputLength.innerHTML = `${inputKey.value} meter = ${convMeter.toFixed(3)} feet | ${inputKey.value} feet = ${(inputKey.value / feet).toFixed(3)} meters`
  
  const convLiters = inputKey.value * gallon
  inputVolume.innerHTML = `${inputKey.value} liters = ${convLiters.toFixed(3)} gallons | ${inputKey.value} gallons = ${(inputKey.value / gallon).toFixed(3)} liters`
  
  
   const convKilo = inputKey.value * pounds
  inputMass.innerHTML = `${inputKey.value} kilograms = ${convKilo.toFixed(3)} pounds | ${inputKey.value} pounds = ${(inputKey.value / pounds).toFixed(3)} kilograms`
  
  
  
})

 if (inputKey.value === ""){
     inputLength.innerHTML = `1 meter = ${feet} feet | 1 feet = ${meter} meters`
     inputVolume.innerHTML = `1 liter = ${gallon} gallons | 1 gallon = ${liters} liters`
     inputMass.innerHTML = `1 kilogram = ${pounds} pounds | 1 pound = ${kilogram} kilograms`
}