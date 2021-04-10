## jsbook45

JSNote is a simple JavaScript code editor with Markdown note functionality.

* Author: Ibrahim Kanber
* Contact: ikanber45@gmail.com

### JSNote is managed by Lerna


### How to install

mpm install jsbook45

### How to run

* Default: **npx jsbook45 serve**  (with this command JSBOKK45 run at port 4500 and create a file notebook.js as a default.Your changes at notebook.js file saved otomaticly and you can reopen this file with command option 1)
* Option1: **npx jsbook45 serve notebook.js** 
* Option2:**npx jsbook45  serve mycode.js** (with this command JSBOKK45 run at port 4500 and run and create file(if does not exist) called mycode.js)
* Option3:**npx jsbook45 serve -p 4000 or npx jsbook45 serve -port 4000** with this command you can run file at spesific port like 4000.
* Option4:**npx jsbook45 serve mynotes.js -p 2510** this command contains all options.with this command you can run your file called mynotes.js on port 2510. 

### Development Notes

#### What am I building?
A CLI to launch an interactive development environment for writing and documenting code. Support JS, and MarkDown

### Challanges at development and answers

1. Users write a code as a string.How can we execute? 
2. <b>Users can write a code like JSX and our Browser cannot execute.What is the solution</b>
3. The code might have import statements for other JS files or CSS. We have to deal with those import statements before executing the code.What is the solution

