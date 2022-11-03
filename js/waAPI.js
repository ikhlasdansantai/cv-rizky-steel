document.getElementsByClassName("name")[0].addEventListener("click", () => {
  getLinkWhastapp();
});

// https://api.whatsapp.com/send?phone=+{{ *YOURNUMBER* }}&text=%20{{ *YOUR MESSAGE* }}

var yourNumber = "081220304881";
var yourMessage = "Hello World";

// %20 mean space in link
// If you already had an array then you just join them with '%20'
// easy right

function getLinkWhastapp(number, message) {
  number = yourNumber;
  message = yourMessage.split(" ").join("%20");

  return console.log("https://api.whatsapp.com/send?phone=" + number + "&text=%20" + message);
}

getLinkWhastapp();
