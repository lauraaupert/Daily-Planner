$(document).ready(function(){

const currentDay = document.querySelector("#currentDay");
currentDay.textContent = dayjs().format("dddd, MMMM D, YYYY");

const currentTime = document.querySelector("#currentTime")
let now = dayjs();
currentTime.textContent = now.format("hA")


for (i = 0; i < 9; i++) {
    $("#0").clone().attr("id", i+1).appendTo(".extrablocks")
}
var allRows = $(".row")

var timeText = document.querySelectorAll("#time")
var timeBlock = document.querySelectorAll(".time-block")

for ( i=0; i < timeText.length; i++) {
    var time = dayjs("2020-12-06T09:00:00")
    timeText[i].textContent = dayjs(time).add(i, 'hour').format("hA")
    if (timeText[i].textContent === currentTime.textContent) {
        timeBlock[i].classList.add("present")
    } else if (timeText[i].textContent < currentTime.textContent) {
        timeBlock[i].classList.add("past")
    } else if (timeText[i].textContent > currentTime.textContent) {
        timeBlock[i].classList.add("future")
    }     
}
    //for ( i=1; i < timeText.length; i++) {
    
//}

/*timeBlock[0].classList.add("past")

console.log(timeText)
console.log(timeBlock)


    
if (timeText[0].textContent === currentTime.textContent) {
    timeBlock[0].classList.add("present")
} else if (timeText[0].textContent < currentTime.textContent) {
    timeBlock[0].classList.add("past")
} */

var currentRow = 0
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        currentRow = parseInt(event.target.parentElement.id);
        var task = document.querySelectorAll(".todo");
        var input = task[currentRow].value;
        task[currentRow] += localStorage.setItem(currentRow, JSON.stringify(input))
        });

    var writtenTask = document.querySelectorAll(".todo");
        setTasks();
    function setTasks() {
    for (i = 0; i < allRows.length; i++) {
        writtenTask[i].textContent = JSON.parse(localStorage.getItem(i))
        }
    }

    //should I make a clear button? 
    $(".clearBtn").on("click", function(event) {
        event.preventDefault();
        localStorage.clear()
        setTasks()        
        });
    })



  















