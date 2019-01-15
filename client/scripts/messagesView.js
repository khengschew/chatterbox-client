var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    this.$chats.append(MessageView.render(data));
  }

};