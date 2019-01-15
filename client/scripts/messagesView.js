var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // add click event to submit
    $('.submit').click(() => {
      Messages.add()
    });

  },

  renderMessage: function({ username, text, roomname }) {
    // replace open angle brackets
    text.replace(/</g, '&#60;');
    // generate message
    $message = (`
      <div class="chat">
        <div class="username ${username}">${username}</div>
        <div>${text}</div>
      </div>
    `);
    // add the message to roomname div
    $('#' + roomname).append($message);

    if (Friends.toggled[username]) {
      Friends.toggleStatus(username);
    }

    $('.' + username).click(() => {
      Friends.toggled[username] = true;
      Friends.toggleStatus(username);
    });
  }

};

