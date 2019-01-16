var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  clearMessages: function() {
    // Add code to clear chats
    this.$chats.html('');
  },

  renderMessage: function(data) {
    if (data.username !== undefined && data.text !== undefined) {
      var msgToAdd = $(MessageView.render(data));
      this.$chats.prepend(msgToAdd);

      $('.username', msgToAdd).click(function() {
        Friends.toggleStatus($(this).html());
      });
    }
  }

};