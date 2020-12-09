# Daily-Planner

This is a daily planner to log tasks for the day during business hours. It uses Dayjs as a date and time API.
Today's date appears at the top.
There are rows of time blocks from 9 to 18, and we can enter task in the text area. There is a place holder "To do".
Once the task has been typed, the save button saves the textarea value to the local storage with a key equal to the row's ID.
If the page is refreshed, there is a for loop that gets the tasks from local storage and associates their key with the row's array
index so that the tasks stay in their time block. I added a clear button that clears all the rows' content.
The time blocks are color-coded based on whether they are in the future, the past, or the present. This happens with an if statement
that compares the present time to each block's time.


Link: https://lauraaupert.github.io/Daily-Planner/

