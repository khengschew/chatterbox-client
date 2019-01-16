var Rooms = {

  rooms: [],
  selectedRoom: null,

  add: function(roomname) {
    // check if exist
    // if not, add to this.rooms
    if (!this.rooms.includes(roomname)) {
      this.rooms.push(roomname);
      // this.update(roomname);
      RoomsView.renderRoom(roomname);
    }
  },

  update: function(data) {
    var roomData = data.results;
    for (var i = 0; i < roomData.length; i++) {
      var currentRoom = roomData[i];
      if (currentRoom !== undefined) {
        this.add(currentRoom.roomname);
      }
    }
  },

  updateSelected: function(roomname) {
    this.selectedRoom = roomname;
    App.update();
  },

  getRoom: function() {
    return this.selectedRoom;
  }

};