# Time to Read

## Description
[Medium](http://medium.com), a popular blogging platform, incorporates a cool little feature to every post that tells you approximately how long it will take you to read an article/post.
![Medium.com time to read example](assets/timetoreadMedium.png)

For this assignment, you will be recreating this feature with javascript, but for your own html document.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Breaking down a software feature into smaller parts
* Use String, Array, and Object methods such as `.split(), .join(), .length`.
* Understand the basic Document Object Model (DOM) and how we can access elements in an HTML document.
* Beginning familiarity with getting elements in the DOM with javascript, such as:
  - `document.querySelector('#idName')`
  - `document.querySelectorAll('.className')`
  - `document.getElementById('nameOfId')`
  - `document.getElementByClassName('nameOfClass')`
  - `document.getElementByTagName('nameOfTag')`

## Details

### Deliverables

* A repo containing at least:
  * `index.html`
  * `readTime.js`
  * `main.js`

### Requirements

* When viewing `index.html` in the browser, any user should be able to read the text "x minute read" where "x" is the time, in minutes, that it will take to read the article.
* The time to read text should be within an `h3` tag with class `.time-to-read`.
* The average word per minute will be 230.
* The formula for calculating WPM is `"total words"/230`
* You will need to use native DOM selector methods such as `.querySelector() or .querySelectorAll()` or older methods like `.getElementById() or .getElementByClassName()`

## Normal Mode

After completing this assignment, Any person viewing your html document should be able to know approximately how long it will take to read article/post on page with an average reading speed of 230 words per minute.

## Hard Mode

Perform all of the normal mode requirements and additionally make the Words Per Minute configurable.  So if I want to change the time to read calculation for really faster readers, the time to read will reflect closer to someone who may read 400wpm.

## Nightmare mode

Perform normal and hard mode, except do it as a jquery plugin.


## Additional Resources

* Read [MDN Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* [MDN DOM Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document#Methods)
