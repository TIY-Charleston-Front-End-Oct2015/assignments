# Build a Chrome Extension

## Description
Modern web development largely involves building 'web' applications, but HTML, JS, and CSS also can be used to create things outside of a browser environment, such as mobile apps with Cordova, Desktop apps with Electron, and also Chrome Extensions.

Your assignment is to create a Chrome extension using Ajax.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the generally relationship to CRUD and GET, PUT, POST, and Delete.
* Be able to debug network requests resulting from Ajax calls to a server.
* Be able to create a Chrome Extension that can be published to the Chrome Web Store.
* `$.ajax(opts)`, focusing on the `GET`.


## Details

### Deliverables

* A repo containing at least:
  * `popup.js`
  * `bower.json`
  * `popup.html`
  * `manifest.json`

### Requirements

* A usable Chrome Extension must be created and able to be loaded into any chrome browser
* You are free to use any/all of the HTTP verbs, but must, at minimum use `GET` with `$.ajax()`
* No data can exist locally in your application, it must be retreived using $.ajax().
* Feel free to use any api where you can readily get JSON Data
  - some examples
    - [Weather Data](https://developer.forecast.io/docs/v2)
    - [Reddit](https://www.reddit.com/r/Charleston.json)
    - [Github](https://api.github.com/)
    - [IMDB (unofficial)](http://omdbapi.com/)
    - [US Government Data](http://www.data.gov/)
    - [NASA](https://data.nasa.gov/developer)
* Or You can use our public REST server here (to use your own data): `http://tiy-fee-rest.herokuapp.com/collections/<collectionName>`


## Normal Mode

For normal mode, you will create a chrome extension that utilizes some data from a remote source (located on a server) using `$.ajax()` and are required to only use the `GET` HTTP verb.


## Additional Resources

* Read [Building a Chrome Extension](https://developer.chrome.com/extensions/getstarted)
* [jQuery API Docs for $.ajax()](http://api.jquery.com/jquery.ajax/)
