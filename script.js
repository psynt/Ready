'use strict';

async function notifications(){
  let permission = await Notification.requestPermission();
  while (permission !== "granted") {
    alert("This app requires notifications to work correctly")
    permission = await Notification.requestPermission();
  } 
  let notification = new Notification("I'm a Notification!")
}

notifications();


document.getElementById("ready").onclick = e => {
  document.getElementById("state").innerText = "Ready";
  new Notification("Your product is ready!", {vibrate:true});
}
