# bb-instafam

## Description
Welcome to the beginnings of [Backbone](http://backbonejs.org/)!

Today we talked mostly about `Backbone.Model` and a little bit about `Backbone.Collection`, while using [Browserify](http://browserify.org/)

Tonight you will be making an instagram clone, using only backbone models and a collection.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the general purpose and need for MVC
* Beginning understanding of a model in Backbone, utilizing `Backbone.Model` constructor and extending it.
* Understand javascript file/library loaders - specifically how to implement Browserify and use `package.json` to make more efficient the development workflow.

## Details

### Deliverables

* A repo containing at least:
  * `package.json`
  * `.gitignore`
  * `main.js`
  * `pictureModel.js`
  * `pictureCollection.js`
  * `index.html`

### Requirements

* There should only be a `bundle.js` file located in the index.html's `<script>` tag, meaning you will need to leverage browserify in your project.
* Your picture model should have the following defaults:
  - default picture
  - default title
  - likes set to zero.
* A user should be able to submit a photo with a title and then it will display on the page.
* A user should be able to like a photo where the likes will increment by one for every like.  These (likes) will persist with the photo on the server.
* Your photo model will persist to `http://tiny-tiny.herokuapp.com/collections/<collection name>`
* Photos will be represented in the DOM as a list, much like the instagram website, with a like button as well. HINT: Think Backbone Collections and iterating over the collection.models.

## Normal Mode

You will be creating an instagram-like clone, utilizing `Backbone.Model` for each picture that is created.

## Additional Resources

* [Backbone JS](http://backbonejs.org/)
* [Browserify](http://browserify.org/)
