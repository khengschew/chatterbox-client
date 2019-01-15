var Messages = {

  messages: [],  

  initialize: function (data) {
    // loop through the data
    // we want to get the username and data
    // send it to MessageView.render
    // converts the data JSON into HTML
    // append the message HTML to MessagesView.$chats in MessagesView.render
    this.messages = data.results;
    MessagesView.render(this.messages);
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