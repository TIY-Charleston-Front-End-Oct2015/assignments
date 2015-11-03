# Build a chat application!

## Description
We've all used chat applications since the early days of ICQ, AOL Instant Messenger, MSN Messenger, but have you actually put your mind around what you would need to do to build a chat application?

Well, now will be your chance to build a chat app, with a user roster and updates to the chat room.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the common HTTP verbs that act upon resources: GET, PUT, POST, DELETE
* Understand what the benefits are of AJAX, when to implement and how to use.

### Performance Objectives

After completing this assignment, you be able to effectively use

* Use jQuery $.ajax and/or any of the shorthand methods.
* Understand polling a server and/or websockets.


## Details

### Deliverables

* A repo containing at least:
  * `bower.json`
  * `main.js`
  * `index.html`

### Requirements

* When a user submits a chat message, all users in a room should be able to see said message within 2 seconds.
* Each person is represented as a single user on the page and no one else can chat on their behalf
* Each person visiting the application should be identifiable by a user name or handle.
* You will use `$.ajax()` for all of your HTTP methods `GET, PUT, POST, DELETE`
* A user may only delete their own messages.
* A user cannot edit any chat messages.
* A user should be able to edit their own username or handle.

## Explorer Mode

Like described in the requirements section, you will be creating an online chat application that can host multiple users that have unique usernames/handles.  

All users can submit new chat messages which should update the chat area in about 2 seconds.  users cannot edit any chat messages, but should be able to edit their username/handle.  Older chat messages can be deleted, but only by the user that created the message.

## Adventure Mode

Upon completion of Explorer mode, also create mention functionality where you can type `@` and get a list of users in the room and allow you to autocomplete their username with a dropdown list in the chat input section.

This functionality should highlight the chat message for the user of the app that was mentioned, but only for that particular user.

For example, if someone was chatting with me, and went @calvin how are you?, I would be the only user of the application that could see the highlighted text "how are you?".

## Epic Mode

In addition to Explorer and Adventure Mode, create a private messaging feature where you can chat with another user privately.  When someone messages you privately, you'll also see a message count on the user roster of the person messaging you.  When you click said user, it should bring you to a new chat dialog that shows only the private messages between you and the person messaging you privately.

The entire application will also have a new feature where anyone can create a custom room and users can choose which room to chat in based on a room roster.  Each chat room/channel should have their own user roster as well, that also maintains the private messaging feature.

## Additional Resources

* [jQuery $.ajax() API](http://api.jquery.com/category/ajax/)
* [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.setInterval)
