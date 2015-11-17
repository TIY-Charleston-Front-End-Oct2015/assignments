# Backbone Imdb

## Description

Create an Imdb-like app that lets you manage a list of Movies.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the difference between creating your own Backbone constructors and Backbone instances
* Understand and be comfortable using:
    - `Backbone.Model`, `Backbone.Collection`, and basic `Backbone.View`
* Understand what `this` refers to inside of the methods you extend from a Backbone Constructor
* Understand and know how to use NOOP functions like Backbone's initialize as well as basic properties in `Backbone.Model`, `Backbone.View`, and `Backbone.Collection`

## Details

### Deliverables

* A uniqure repository under your username on github
* A publicly visible website on gh-pages branch

### Requirements

* No JSHint warnings or errors
* All specifications met below

## Requirements
Each Movie will have the following data:

1. title
2. release (year)
3. cover (image)
4. plot
5. rating

You will need to CRUD these movies, using Backbone's built in ajax methods.

Please use either:
`http://tiy-fee-rest.herokuapp.com/collections/<collectionName>`

or

`http://tiyfee-calweb.rhcloud.com/collections/<collectionName>`


## Hard Mode

In addition to basic crud on your movies, also provide sorting functionality to movies.
