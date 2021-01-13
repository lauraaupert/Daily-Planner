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

Technologies used: Javascript, jQuery, HTML/CSS, OpenWeather Map API

![image](https://user-images.githubusercontent.com/73617474/104407819-84383780-5530-11eb-9252-88245d0e2299.png)

MIT License

Copyright (c) [2020] [Laura Aupert]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
