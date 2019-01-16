var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  clearMessages: function() {
    // Add code to clear chats
    this.$chats.html('');
  },

  renderMessage: function(data, isFriend = false) {
    if (data.username !== undefined && data.text !== undefined) {
      var msgToAdd = $(MessageView.render(data));
      if (isFriend) {
        msgToAdd.addClass('friend');
      } else {
        msgToAdd.removeClass('friend');
      }
      this.$chats.prepend(msgToAdd);

      $('.username', msgToAdd).click(function() {
        var username = $(this).html();
        Friends.toggleStatus($(this).html());
        // Toggle css for friends
        MessagesView.toggleClassToUser(username, 'friend');
      });
    }
  },

  toggleClassToUser: function(username, cssClass) {
    $('.chat', this.$chats).each(function(index, element) {
      var currentUser = $('.username', $(this)).html();
      if (currentUser === username) {
        $(this).toggleClass(cssClass);
      }
    });
  }

};