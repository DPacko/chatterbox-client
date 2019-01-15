const Rooms = {

  add: (room) => {
    // create the div with id roomname
    let $room = `<div id="${room}"></div>`;
    // append to chat div
    RoomsView.$chats.append($room);
    // insert into room.js roomname
    Rooms[room] = room;
    // add select option for room
    RoomsView.$select.append(`<option value="${room}">${room}</option>`);
  }

};

