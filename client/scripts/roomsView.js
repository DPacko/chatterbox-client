const RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $chats: $('#chats'),

  initialize: function() {
    // function for adding rooms that takes in roomname

    // add jquery change event to select
    this.$select.change(() => {
      this.renderRoom(this.$select[0].value);
    });
    // add click event to button
    this.$button.click(() => {
      // adds room div to chat div
      // adds to room div in rooms.js
      $input = $('#rooms input');
      Rooms.add($input.val());
      $input.val('');
    });
    // call room creation function and pass lobby
    Rooms.add('lobby');
  },

  renderRoom: function(room) {
    // toggles rooms with matching roomname id
    let children = this.$chats.children();

    if (children) {
      for (let child of children) {
        if (child.id === room) {
          $('#' + child.id).show();
        } else {
          $('#' + child.id).hide();
        }
      }
    }
  }

};
