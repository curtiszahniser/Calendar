var dayEl = document.getElementById("currentDay")
var timeBlockInput = document.querySelector(".time-block")
var saveBtn = document.querySelector(".saveBtn")
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  displayCurrentDate()
  colorTimeBlocks()
  saveToLocalStorage()
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});
function displayCurrentDate() {
  var current = dayjs().format("dddd, MMMM D")
  dayEl.textContent = current
}
function colorTimeBlocks() {
  var blocks = document.querySelectorAll(".time-block")
  console.log(blocks)
  var currentHour = dayjs().hour()
  for (var i = 0; i < blocks.length; i++) {
    var currentBlock = blocks[i]
    var blockId = currentBlock.id
    //need to .split  value to get only number
    var numb = Number(blockId.split("-")[1])
    currentBlock.classList.toggle("future")
    if (currentHour === numb) {
      currentBlock.classList.toggle("present")

    } else if (currentHour < numb) {
      currentBlock.classList.toggle("future")
    } else {
      currentBlock.classList.toggle("past")
    }

    currentBlock.children[2].addEventListener("click",saveInputHandler)
  }

  

}
function saveInputHandler(e){
  console.log("dfgn")
  console.log(e.target.previousSibling)
var textInput = e.target.parentElement.children[1].value

var storageKey = e.target.parentElement.id
localStorage.setItem(storageKey, textInput)


}
