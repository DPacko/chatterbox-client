var Friends = {
  toggleStatus: (username) => {
    // check if usernmae's toggled status
    if (Friends.toggled[username] === true) {
      // if true, unhighlight it
      Friends.toggled[username] = false;
      $('.' + username).parent().css('background-color', '#eee');
    } else {
      // if false we highlight it
      Friends.toggled[username] = true;
      $('.' + username).parent().css('background-color', '#ffeb38');
    }
  },

  toggled: {}
};

