'use strict';

async function notifications(){
  let permission = await Notification.requestPermission();
  while (permission !== "granted") {
    alert("This app requires notifications to work correctly")
    permission = await Notification.requestPermission();
  } 
  let notification = new Notification("I'm a Notification!", {
    body: "Your product is ready",
    vibrate: [200, 100, 200],
  });
}

notifications();


document.getElementById("ready").onclick = e => {
  document.getElementById("state").innerText = "Ready";
  new Notification("Your product is ready!", {
    body: "Your product is ready",
    vibrate: [200, 100, 200],
  });
  window.navigator.vibrate([200]);
}
