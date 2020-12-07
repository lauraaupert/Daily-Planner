$(document).ready(function(){


/*<script>
  dayjs().format()
</script>
<script>
      dayjs.extend(customParseFormat)
      dayjs("12-25-1995", "MM-DD-YYYY")

      var current = querySelector("#currentDay");
      current.textContent = dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]') 
*/

console.log(dayjs())

const events = document.querySelectorAll(".event")
console.log(events)
events.forEach( event => {
    console.log(event)
    const date = dayjs(event.dataset.date);
    const dateDiv = event.querySelector(".date");
    dateDiv.textContent = date
})


// the rows will be in an array that will include an array of task for each row


const currentDay = document.querySelector("#currentDay");
currentDay.textContent = dayjs().format("dddd, MMMM D, YYYY");

const currentTime = document.querySelector("#currentTime")
//currentTime.textContent = Date().toLocaleTimeString();


let now = dayjs();
currentTime.textContent = now.format("hA")
console.log(now.format("h:mm:ss a"));
//var allRows = document.querySelector(".extrablocks");
var createRows = [];


//when click saveBtn create new text area in same time-block

    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    var todoInput = document.querySelector("#todo-text");

    var saveBtn = $(".saveBtn")
    //var row = $(".row")
    //var allRows = [
     //   {row: ["yellow", "blue"]
    //    },
    //    {row: []}, 
//]


    var rowA = $("#0")

 // var newRows = allRows.push($("#0").clone().appendTo(".extrablocks"))
for (i = 0; i < 9; i++) {
    var newRows = $("#0").clone().attr("id", i+1).appendTo(".extrablocks")
}
var allRows = $(".row")


console.log(allRows[3])
    //$("#0").
        var time = 9;
   //$("#timeblocks").children().each(function () {

  //.each($(".time").text(time+i))


console.log($(".row"))



    //allRows.push(newRows)
  //console.log($(".row"))

  //var allNewRows = allRows.add($("#timeblocks").children())

   //$("#timeblocks").children().each(function () {
    //newRows.attr("id", i)
    //var allRowsNew = $(allRows).add(newRows)
   //})
    //console.log(allRowsNew)



  //allRows.push(newRows)
  //allRows[0].push({task: "hello"})
  //var allRows = [$(".row")]
    console.log(allRows)
    console.log(allRows[0])
    console.log(allRows[1])
    console.log(allRows[2])
    console.log(allRows[9])




var timeText = document.querySelectorAll("#time")
var timeBlock = document.querySelectorAll(".time-block")
console.log(timeBlock)

for (var i=0; i < timeText.length; i++) {
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

if (currentTime.textContent === "9AM") {
    timeBlock[0].classList.add("present")
} else if (timeText[0].textContent < now.format("hA")) {
    timeBlock[0].classList.add("past")
} else if (timeText[0].textContent > now.format("hA")) {
    timeBlock[0].classList.add("future")
}
console.log(timeText[0])
console.log(timeBlock[0])



/*allRows.forEach( date => {
    var time = dayjs("2020-12-06T09:00:00").format("hA")
    var timeElement = document.querySelector(".time")
    timeElement.textContent = time.add(1, 'hour')
    //$(".time").text

})
for (var i=0; i < timeText.length; i++) {
    var time = 9;
    timeText[i].textContent = time + i
}
*/

console.log($("#4"))

    var currentRow = 0
    //var taskText = document.querySelector("#here")
    var taskList = document.querySelector(".task-list")


    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        var writtenTask = document.querySelectorAll(".todo")

        currentRow = parseInt(event.target.parentElement.id);
        console.log(currentRow)
        var area = $("<textarea>")
        var task = document.querySelectorAll(".todo");
        console.log(task)
        var input = task[currentRow].value;

        //var task = allRows[currentRow].taskText.value
        //allRows[currentRow].writtenTask.textContent += JSON.parse(localStorage.getItem("task"))
        task[currentRow] += localStorage.setItem(currentRow, JSON.stringify(input))
        //writtenTask[currentRow+1].textContent = JSON.parse(localStorage.getItem("task"))
        //console.log(newTask)
        //task += localStorage.setItem("task", JSON.stringify(task))
        console.log(writtenTask)
        //allRows[currentRow].push(toDo)
        console.log(task)

        console.log(event)
        if (task === false) {
            return;
        } 
            //renderTasks();

   

        
        }

    );
    var writtenTask = document.querySelectorAll(".todo");

    for (i = 0; i < allRows.length; i++) {
        writtenTask[i].textContent = JSON.parse(localStorage.getItem(i))

    }



  







  //NOW I NEED TO SAY IF BLOCK HOUR IS THE SAME AS CURRENT TIME ADD CLASS "PRESENT"
//IF SMALLER THAN CURRENT TIME ADD CLASS PAS
//IF BIGGER THAN CURRENT TIME ADD CLASS FUTURE








});