var MessagesView = {

  $chats: $('#chats'),
  $submit: $('.submit'),

  initialize: function(data) {
     // loop through object data
     let messages = data.results;
     // for each message object
     for(let m of messages){
       // pass it into render message
       this.renderMessage(m);
     }
  },

  renderMessage: function({ username = 'anonymous', text = '', roomname = 'lobby' }) {
    if(roomname === ''){
      roomname = 'lobby';
    }
    // replace open angle brackets
    text = String(text).replace(/</g, '&#60;');
    username = String(username).replace(/[^A-Z0-9]+/ig, "_");
    roomname = String(roomname).replace(/[^A-Z0-9]+/ig, "_");
    // generate message
    $message = (`
      <div class="chat">
        <div class="username ${username}">${username}</div>
        <div>${text}</div>
      </div>
    `);
    // add the message to roomname div
    console.log(roomname);
    $('#chats #' + roomname).append($message);

    if(roomname !== 'lobby' && !Rooms.partyRooms[roomname]){
      Rooms.add(roomname);
    }

    if (Friends.toggled[username]) {
      Friends.toggleStatus(username);
    }

    $('.' + username).click(() => {
      Friends.toggled[username] = true;
      Friends.toggleStatus(username);
    });
  }

};

