let number = 0
//This is for setting up my number//
document.getElementById('button').addEventListener('click', calculation)
//This is to add an event listener to my button//
function calculation () {
  number = document.getElementById('input').value
  //This allows the button and text box to work properly together//
  number = parseInt(number)
  //This sets up the number to be calculated//
  number = number ** 2
  //This allows the function to properly multiply the input number//
  alert(number)
  //This sets up the alert to appear after calculating the area//
}