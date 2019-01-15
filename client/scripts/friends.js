var Friends = {
  toggleStatus: (username) => {
    $('.' + username).parent().css('background-color', '#ffeb38');
  },

  toggled: {}
};