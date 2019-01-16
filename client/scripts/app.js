var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    Messages.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    setInterval(() => {
      this.startSpinner();
      this.fetch(this.stopSpinner);
    }, 5000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // Edge case: data is empty - to be handled later!
      // Input: messages data
      // Output: none
      // Side effect: display messages

      Messages.update(data);
      Rooms.update(data);
      // console.log(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  getRoom: function() {
    return Rooms.getRoom();
  },

  update: function() {
    Messages.update();
  }
};

