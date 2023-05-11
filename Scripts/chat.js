var db = null
window.onload = function() {
  var firebaseConfig = {
    apiKey: "AIzaSyDrwvJqr_Hz_N5v18GCVQUoI6EALZC2_hU",
    authDomain: "syce-s-game-shack.firebaseapp.com",
    projectId: "syce-s-game-shack",
    storageBucket: "syce-s-game-shack.appspot.com",
    messagingSenderId: "654724200024",
    appId: "1:654724200024:web:e5eb846908cde574413c2d",
    measurementId: "G-N5M99PH01Z"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  db = firebase.database()

  var userID = localStorage.get("sgs_userid")
  if(!userID) createUser();

  load_chats();
}

function create_chat(userIDs){
  var id = localStorage.getItem("sgs_chat_id")
  var name = localStorage.getItem("sgs_profile_username") || "No Username"
  let users = []
  users.push(id)
  users.push(name)
  for(let i = 0; i < userIDs.length; i++){
    users.push(userIDs[i])
    users.push(false)
  }

  chatID = generate(8)
  const created = Date.now();
  db.ref(`chats/` + `${chatID}`).set({
    users: users,
    id: chatID,
    creation_date: created
  })
  .then(function(){
    //
  })
}

function send_message(message, chatID){
  var id = localStorage.getItem("sgs_chat_id")
  var name = localStorage.getItem("sgs_profile_username") || "No Username"
  if(message == null){
    return
  }

  // Get the firebase database value
  db.ref(`chats/` + `${chatID}`).once('value', function(messages_object) {
    if(messages_object.numChildren() === 0) return;
    let chat = messages_object.val()

    let index = null
    try {
      index = chat.messages.length + 1
    } catch(err) {
      index = 1
    }

    const date = Date.now();
    let messages = null
    try {
      chat.messages.push(
        {
          message: message,
          index: index,
          user_id: id,
          date: date
        }
      )
    } catch(err) {
      chat.messages = [
        {
          message: message,
          index: index,
          user_id: id,
          date: date
        }
      ]
    }

    db.ref(`chats/` + `${chatID}`).set({
      users: chat.users,
      id: chat.id,
      creation_date: chat.creation_date,
      messages: chat.messages
    })
    // .then(function(){
    //   // After we send the chat refresh to get the new messages
    //   parent.refresh_chat()
    // })
  })
}

function fetch_messages(chatID){
  db.ref(`chats/` + `${chatID}`).once('value', function(messages_object) {
      // var messages = Object.values(messages_object.val())
      console.log(messages_object.val().messages)
      return Object.values(messages_object.val())
  })
}

function load_chats(){
  db.ref(`chats/`).on('value', function(messages_object) {
    var id = localStorage.getItem("sgs_chat_id")
    let chats = Object.values(messages_object.val())
    console.log(chats)
    
    for(let i = 0; i < chats.length; i++){
      if(chats[i].users.join("\n").includes(id)){
        var div = document.createElement("div");
        div.className = "chat"
        div.id = chats[i].id
        div.onclick = function(){ fetch_messages(chats[i].id) }

        var users = chats[i].users
        var result = [];
        for (let i = 0; i < users.length; i += 2) {
            var chunk = users.slice(i, i + 2);
            result.push(chunk);
        }

        var final = []
        for (let i = 0; i < result.length; i++) {
            if(i === 0) continue;
            if(result[i][1] === false){
              final.push("No Username")
            } else {
              final.push(result[i][1])
            }
        }

        var name = document.createElement("div");
        name.className = "chat_name"
        name.id = `name_${chats[i].id}`
        name.innerText = final.join(", ")
        div.appendChild(name)

        var date_text = chats[i].creation_date
        if(chats[i].messages){
          date_text = chats[i].messages[chats[i].messages.length - 1].date
        }
        console.log(date_text)

        var options = {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        };

        const formatted = new Date(parseInt(date_text)).toLocaleString('en-US', options);
        console.log(formatted)

        var date = document.createElement("div");
        date.className = "chat_date"
        date.id = `date_${chats[i].id}`
        date.innerText = formatted
        div.appendChild(date)

        document.getElementById("chat_list").appendChild(div)
      }
    }

    db.ref('chats/').off();
  })
}

function createUser(){
  var userID = generate(16)
  var chatID = generate(8)
  localStorage.setItem("sgs_userid", userID)
  localStorage.setItem("sgs_chatid", chatID)

  var username = localStorage.getItem("sgs_profile_username")
  
  const date = Date.now();
  db.ref(`users/` + `${userID}`).set({
    chatID: chatID,
    userID: userID,
    creation_date: date,
    username: username,
  })
}