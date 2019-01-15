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
    this.messages = data.results;

    // Loop through messages
    // Call MessagesView.renderMessage
    // Check if roomname exists
    // call Rooms.addRooms(roomname)
    MessagesView.clearMessages();

    for (var i = this.messages.length - 1; i >= 0; i--) {
      var currentMsg = this.messages[i];
      MessagesView.renderMessage(currentMsg);
      if (currentMsg.roomname !== undefined) {
        Rooms.addRooms(currentMsg.roomname);
      }
    }
  },

  newMessage: function () {
    var message = {
      username: App.username,
      text: $('input#message').val(),
      roomname: 'room'
    };

    this.messages.push(message);
    MessagesView.renderMessage(message);
    
    Parse.create(message, function (data) {
      console.log('chatterbox: Message sent');
    });
  }

};