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
    var row = $(".row")
    //var allRows = [
     //   {row: ["yellow", "blue"]
    //    },
    //    {row: []}, 
//]
    var rowA = $("#0")
    //.attr("id", 0)
    //i=0
    //0.attr("id", "row"+i)


    //var allRows = [$(".row")]

//allRows.push({row: ["hello"]})
//console.log(allRows[2].row[0])
console.log(allRows)
//allRows.push(row)
//saveBtn.append(row)

    //var row_id = $("#0:nth-child(1)").last().attr("id");
    //var split_id = row_id.split();
  
    // New index
    //var index = Number([1]) + 1;
//var index = Number([1]) + 1;
//$(newRows).find('0:nth-child(1)').attr("id","0"+index);
  //$(newRows).find('0:nth-child(2)').attr("id", "0"+index);
  // Set value
  //$(newRows).find('0:nth-child(1)').val("row"+index);
  //$(newRows).find('0:nth-child(2)').val("row"+index);

 // var newRows = allRows.push($("#0").clone().appendTo(".extrablocks"))
for (i = 0; i < 9; i++) {
var time = 9;
    var newRows = $("#0").clone().attr("id", i+1).appendTo(".extrablocks")
    
    $(".time").text(time++)
}
    var allRows = $(".row")
    //$("#0").


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



  //$each(rowA)

  //$("#timeblocks").children("#rowA").each(i++)
   // console.log(rowA)

var time = 9;
$(".time").text(time)

//console.log(newRows[3])


//console.log(allRows[0].row[0])


//or row = allRows[i]
    //console.log(allRows[0])

    var currentRow = 0
    var task = document.querySelector("#here").value;


    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        currentRow = parseInt(event.target.parentElement.id);
        console.log(currentRow)
        var area = $("<textarea>")
        console.log(task)
        localStorage.setItem("task", JSON.stringify(task))
        var writtenTask = JSON.parse(localStorage.getItem("task"))
        console.log(writtenTask)

        console.log(event)
        if (task === false) {
            return;
        } else {


        }




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


