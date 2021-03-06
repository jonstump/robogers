Mr. Roboger's Neighborhood
<hr>

### By Jon Stump
<img align="center" src="https://avatars2.githubusercontent.com/u/59323850?s=460&u=372c7d529b7379408ae54491ab3449b6e2f4d94d&v=4">

## Technologies Used
* HTML
* CSS
* Javascript
* jQuery
* Bootstrap
* Visual Studio Code

## Specs / Tests
**Describe:** robogersCountUp()
<br/>
**Test1:** Count of numbers: If user enters 5 and array count is created"
<br/>
**Expect:**  robogers("5").toEqual([0,1,2,3,4,5])

**Describe:** robogersNeighbor()
<br/>
**Test2:** For numbers containing 3: replace with the phrase "Won't you be my neighbor?"
<br/>
**Expect:** robogers("13").toEqual("0,1,2,Won't you be my neighbor?,4,5,6,7,8,9,10,11,12,Won't you be my neighbor?")
<br/>\
**Test3:** For numbers containing the digit 2 and not the digit 3 : replace with the phrase "Boop!"
<br/>
**Expect:** robogers("13").toEqual(""0,1,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,10,11,Boop!,Won't you be my neighbor?"")
<br/>\
**Test4:** For numbers containing the digit 1 and neither the digit 2 or 3: replace with the phrase "Beep!"
<br/>
**Expect:**  robogers("13").toEqual("0,Beep!,Boop!,Won't you be my neighbor?,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?")



## Description

This is a page that allows a user to do an input and have numbers replaced with phrases.

## Examples of use

For fun with friends to chat with their robo-neighbor


## Setup/installation Requirements

* Copy the following link to your clipboard: https://github.com/jonstump/robogers
* Open a Bash Terminal
* In your terminal window, navigate to a directory that you would like to clone the repository to
* Within your git bash terminal type in 'git clone' and then paste in the link from your clipboard by right clicking and selecting 'paste' example below:
```bash
$ git clone https://github.com/jonstump/robogers
```
* After the page has been cloned to your chosen directory locate the folder and open it.
* After you have the folder open that you cloned from Github.com double click the file "index.html"
* The webpage should open in the default browser set by your machine's settings


## Sources Used
* [Epicodus](https://www.epicodus.com/)
* [stack overflow](https://stackoverflow.com/)
* [w3schools](https://www.w3schools.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)

## Known Bugs


## License
MIT License

Copyright &copy; 2021 Jon Stump

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

## Contact Information
[email: jmstump@gmail.com](mailto:jmstump@gmail.com)