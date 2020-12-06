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






const currentDay = document.querySelector("#currentDay");
currentDay.textContent = dayjs().format("dddd, MMMM D, YYYY");

var allRows = document.querySelector(".extrablocks");
var createRows = [];

for (var i = 0; i < 9; i++) {
    $(".row").clone().push(createRows);
    createRows.appendto(allRows);
}

//when click saveBtn create new text area in same time-block

//to clone the row if I don't want to write all time blocks
/*function addRow(id)
    { var newRow=document.getElementById("#row").tBodies[0];  //get the table
      var node=t.rows[0].cloneNode(true);    //clone the previous node or row
      newRow.appendChild(node);   //add the node or row to the table
    }  
    addRow()*/
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    var todoInput = document.querySelector("#todo-text");

    $(".saveBtn").on("click", function(event) {
        $(".todo").css("float", "left");
        var area = $("<textarea>");
        area.css("float", "left")
        $(".saveBtn").before(area)

    }
    )
    
    /*addStuff())
    
    /*function addStuff() {
        $("#here").css("float","left");
        $("#here").append("<textarea>");
    };


    function addStuff () {
        //$(".table").add(".row");
        var area = $("<textarea>");
       
        $(".time-block").append(area)
    }*/

    //area.attr("style", "justify-self: center")

//to add the class of .hour
function onHour () {
    var nineHour = document.querySelector(".nine");
nineHour.classList.add("present");
}

onHour()


