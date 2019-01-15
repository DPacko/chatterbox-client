const Messages = {

  add: () => {
    //generate message
    let $message = $('#message');
    let message = {
      username: window.location.search.slice(10),
      text: $message.val(),
      roomname: RoomsView.$select[0].value
    }
    $message.val('');
    // send post request
    Parse.create(message);

    MessagesView.renderMessage(message);
  }
};