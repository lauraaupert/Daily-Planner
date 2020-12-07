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
var d = new Date();
//var n = 


let now = dayjs();
currentTime.textContent = now.format("h:mm:ss a")
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
for (var i=0; i < timeText.length; i++) {
    var time = 9;
    timeText[i].textContent = time + i
}


    var currentRow = 0
    //var taskText = document.querySelector("#here")
    var task = 


    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        currentRow = parseInt(event.target.parentElement.id);
        console.log(currentRow)
        var area = $("<textarea>")
        console.log(task)
        var task = document.querySelector("#here").value;
        //var task = allRows[currentRow].taskText.value
        var writtenTask = $(".todo")
        //allRows[currentRow].writtenTask.textContent += JSON.parse(localStorage.getItem("task"))

        localStorage.setItem("task", JSON.stringify(task))
        console.log(writtenTask)
        //allRows[currentRow].push(toDo)

        console.log(event)
        if (task === false) {
            return;
        } else {
            //renderTasks();

        }

        //function renderTasks() {
        //var toDo = document.querySelector("#here")
        //allRows[currentRow].toDo.textContent += JSON.parse(localStorage.getItem("task"))

        //}




        //$(".todo").css("float", "left");

        area.css("float", "left")
        //$(".time-block").append("<textarea>")

       // allRows[currentRow].push({task: task})
      // storeTasks()
  });

  function storeTasks () {
    localStorage.setItem("task", JSON.stringify(task))

      console.log(task)
  }

//to add the class of .hour
function onHour () {
    var nineHour = document.querySelector(".nine");
nineHour.classList.add("present");
}

onHour()


