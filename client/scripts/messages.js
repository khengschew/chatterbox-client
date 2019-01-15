var Messages = {

  initialize: function (data) {
    // loop through the data
    // we want to get the username and data
    // send it to MessageView.render
    // converts the data JSON into HTML
    // append the message HTML to MessagesView.$chats in MessagesView.render
    var results = data.results;
    for (var i = 0; i < results.length; i++) {
      // MessagesView.render($chats.append(MessageView.render(data[i])));
      var currMsg = results[i];
      // console.log(currMsg);
      if (currMsg.username && currMsg.text) {
        MessagesView.render(currMsg);
      }
    }
  }

};