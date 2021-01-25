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

## Specs
**Describe:** robogers()
<br/>
**Test:** Count of numbers: If user enters 5 and array count is created"
<br/>
**Expect:**  robogers("5").toEqual([0,1,2,3,4,5])

**Describe:** robogers()
<br/>
**Test:** For numbers containing 3: replace with the phrase "Won't you be my neighbor?"
<br/>
**Expect:** robogers("13").toEqual("Won't you be my neighbor")

**Describe:** robogers()
<br/>
**Test:** For numbers containing 2: replace with the phrase "Boop!"
<br/>
**Expect:** robogers("20").toEqual("Boop!")

**Describe:** robogers()
<br/>
**Test:** For numbers containing 1: replace with the phrase "Beep!"
<br/>
**Expect:**  robogers("10").toEqual("Beep!")

**Describe:** robogers()
<br/>
**Test:** For numbers containing both a 3 and 2: 3 should apply before 2
<br/>
**Expect:** robogers("23").toEqual("Won't you be my neighbor?")

**Describe:** robogers()
<br/>
**Test:** For numbers containing both a 2 and 1: 2 should apply before 1
<br/>
**Expect:** robogers("21").toEqual("Boop!")

**Describe:** robogers()
<br/>
**Test:**  Output result to HTML page
<br/>
**Expect:** Expect to see results displayed on webpage


## Description

This is a page that allows a user to do an input and have numbers replaced with phrases.

## Examples of use



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
* The webpage should open in the default browser set by your machines settings


## Sources Used
* [Epicodus](https://www.epicodus.com/)
* [stack overflow](https://stackoverflow.com/)
* [w3schools](https://www.w3schools.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/)

## Known Bugs
* Does not display array for user to see on page.

## License
[MIT](https://mit-license.org/)

## Contact Information
[email: jmstump@gmail.com](mailto:jmstump@gmail.com)