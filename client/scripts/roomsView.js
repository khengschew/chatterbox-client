var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on("click", function() {
      var roomname = prompt("Please enter your roomname", "lobby");
      if (roomname != null) {
        Rooms.addRooms(roomname);
      }
    });
  },

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
