# get-to-the-shoppah

## Description
It's beginning to look a lot like Angular, everywhere you go....take a look at the npm, time to install again, with Angular and using the ng-show!

A common application that drives companies' revenue is a shopping experience, just look at Amazon, Thinkgeek and the like.

In this assignment, you will be making your very own shopping experience, using angular.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand basic Angular Routing using `ngRoute`
* Beginning proficiency in leveraging controllers and services to do their respective MVC things.
* Learn more deeply the built in functionality of Angular and the effective use of directives.
* Understand Dependency Injection and the differences with a normal function.
* CRUD to a server multiple models



## Details

### Deliverables

* A repo containing at least:

  * `bower.json`
  * `app.module.js`
  * `index.html`
  * `controllers.js`
  * `services.js`

### Requirements

* There should be 2 separate sections, an admin section and a consumer section.
* Admin Section:
  - Admins have the ability to CRUD Products to your cart
  - Product Model should have the following attributes:
    - Picture (via a link, no upload)
    - Product name
    - Product Description
    - Product Price
    - Reviews (array of objects)
      - each review will contain:
        - name
        - review
        - rating (can be star rating, or numerical)
* Consumer Section
  - Will be able to browse a list of Products
  - Can navigate to a product detail page to get more information, including Reviews
  - Can submit a review to a product as well as give rating
  - Will be able to add any product to a shopping cart and adjust quantity
    Shopping Cart for consumer
    - will include Product Name, Product Price, and quantity
    - Cart will calculate a total
    - a checkout button will simply navigate to another page and print a 'receipt'
## Normal Mode

Normal mode is to satify the requirements above.
