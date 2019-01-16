var Messages = {

  messages: [],  

  initialize: function () {
    // loop through the data
    // we want to get the username and data
    // send it to MessageView.render
    // converts the data JSON into HTML
    // append the message HTML to MessagesView.$chats in MessagesView.render
  },

  update: function (data) {
    if (data) {
      this.messages = data.results;
    }

    // Loop through messages
    // Call MessagesView.renderMessage
    // Check if roomname exists
    // call Rooms.add(roomname)
    MessagesView.clearMessages();

    var currentRoom = App.getRoom();
    for (var i = this.messages.length - 1; i >= 0; i--) {
      var currentMsg = this.messages[i];

      var isFriend = App.checkFriendship(currentMsg.username);

      if (currentRoom === null) {
        MessagesView.renderMessage(currentMsg, isFriend);
      } else if (currentMsg.roomname === currentRoom) {
        MessagesView.renderMessage(currentMsg, isFriend);
      }
    }
  },

  newMessage: function () {
    var message = {
      username: App.username,
      text: $('input#message').val(),
      roomname: App.getRoom()
    };

    this.messages.push(message);
    MessagesView.renderMessage(message);
    
    Parse.create(message, function (data) {
      console.log('chatterbox: Message sent');
    });
  }

};