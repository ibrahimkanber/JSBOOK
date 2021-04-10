## jsbook45

jsbook45 is a simple JavaScript code editor with Markdown note functionality.

* Author: Ibrahim Kanber
* Contact: ikanber45@gmail.com

### JSNote is managed by Lerna


### How to install

mpm install jsbook45

### How to run

* Default: **npx jsbook45 serve**  (With this command, a file named notebook.js(default file name) is created in the current folder and the application starts to run on port 4500 (default port).The changes in the notebook.js file are automatically saved and the user can open this file again with the following command. see Option1 )
* Option1: **npx jsbook45 serve notebook.js** 
* Option2:**npx jsbook45  serve mycode.js** (With this command, if there is mycode.js in the current folder, the file is opened, or the file named mycode is created and the application starts to run on port 4500)
* Option3:**npx jsbook45 serve -p 4000 or npx jsbook45 serve -port 4000** (With this command, the application can be opened on the desired port.)
* Option4:**npx jsbook45 serve mynotes.js -p 2510** (This command is a combination of other options and the application can be run on the desired port with the desired filename)

#### show() funtion


This function is the default function and renders the parameter in the field for the editor's right side. See examle below.

<pre>
<code>
import axios from "axios"

axios.get("https://jsonplaceholder.typicode.com/todos/1").then(({data})=>show(data))
</code>
</pre>

### Development Notes

#### What am I building?
A CLI to launch an interactive development environment for writing and documenting code. Support JS, and MarkDown

#### Challanges at development and solutions

Code will be provided to Preview as a string. We have to execute it safely ?

      A solution is esbuild-wasm.ESBuild can transpile + bundle code all in the browser. 
      --- ESBuild Bundling Cycle ---
      1. Figure out where the index.js is stored (onResolve)
      2. Attemp to load up the index.js file (onLoad)
      3. Parse the index.js file, find any import/require/exports
      4. If there's any import/require/exports, figure out where the requested file is (onResolve) => UNPKG
      5. Attemp to load up the file
      (Used localforage (indexedDB) to cache)
      





