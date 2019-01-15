var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  // render: function(rooms) {
  //   // Loop through all rooms
  //   // Call render room for each
  //   for (var i = rooms.length - 1; i >= 0; i--) {
  //     var currentRoom = rooms[i];
  //     this.renderRoom(currentRoom);
  //   }
  // },

  dropdown: _.template(`
    <option value="<%- roomname %>">
      <%- roomname %>
    </option>
  `),

  renderRoom: function(roomname) {
    // Use template, add room option to $select
    this.$select.append(this.dropdown({roomname}));
  }

};
