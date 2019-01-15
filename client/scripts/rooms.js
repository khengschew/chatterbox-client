var Rooms = {

  rooms: [],

  addRooms: function(roomname) {
    // check if exist
    // if not, add to this.rooms
    if (!this.rooms.includes(roomname)) {
      this.rooms.push(roomname);
      // this.update(roomname);
      RoomsView.renderRoom(roomname);
    }
  }

};