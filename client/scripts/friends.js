var Friends = {

  friends: {},

  toggleStatus: function(friend) {
    if (this.friends[friend]) {
      this.friends[friend] = false;
    } else {
      this.friends[friend] = true;
    }
  },

  checkFriendship: function(username) {
    return this.friends[username] ? true : false;
  }

};