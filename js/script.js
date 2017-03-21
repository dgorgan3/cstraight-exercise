function createMessage() {

  var body = document.querySelector("body");

  // set wrapper id and styles
  var messageWrapper = document.createElement("div");
  messageWrapper.setAttribute("id", "message-wrapper")

  Object.assign(messageWrapper.style, {
    position: "fixed",
    background: "#000",
    opacity: "0.9",
    width: "100%",
    height: "100%",
    top:"0",
    right:"0",
    bottom: "0",
    left: "0",
    zIndex: "1"
  });

 // set wrapper message styles
  var message = document.createElement("div");

  Object.assign(message.style, {
    width: "100%",
    margin: "0 auto",
    padding: "0 45px",
    textAlign: "center",
    color: "#fff",
    fontWeight: "900",
    fontSize: "5em",
    maxWidth: "600px",
    marginTop: "-10px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2"
  });


  message.innerHTML = "Coming Soon!"

  messageWrapper.append(message)
  body.appendChild(messageWrapper)
}

// handler to render message
var learnMoreBtn = document.getElementsByClassName("learn-more")[0];
learnMoreBtn.addEventListener("click", createMessage)

// handler to remove message
document.querySelector("body").addEventListener("click", function(e) {
  if ( e.target.id === "message-wrapper" ) {
    e.target.style.display = "none";
    document.getElementById("message-wrapper").remove();
  }
})

// redirect to cstraight website
var redirectBtn = document.getElementsByClassName("apply-now")[0];
redirectBtn.addEventListener("click", function() {
  window.location = "http://cstraight.com"
})
