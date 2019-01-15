var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  clearMessages: function() {
    // Add code to clear chats
    this.$chats.html('');
  },

  render: function(data) {
    this.clearMessages();

    for (var i = 0; i < data.length; i++) {
      var currentMsg = data[i];
      if (currentMsg.username && currentMsg.text) {
        this.$chats.append(MessageView.render(currentMsg));
      }
    }
  },

  renderMessage: function(data) {
    this.$chats.prepend(MessageView.render(data));
  }

};