var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  clearMessages: function() {
    // Add code to clear chats
    this.$chats.html('');
  },

  // render: function(data) {
  //   this.clearMessages();

  //   for (var i = data.length - 1; i >= 0; i--) {
  //     var currentMsg = data[i];
  //     if (currentMsg.username && currentMsg.text) {
  //       this.renderMessage(currentMsg);
  //     }
  //   }
  // },

  renderMessage: function(data) {
    if (data.username && data.text) {
      this.$chats.prepend(MessageView.render(data));
    }
  }

};