// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage =
    "He is ready to answer you ! <br> if you have need more information for talk with GUS, <b>Download the notice <b>";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText).toLowerCase(userText);

  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    return 0;
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="botText"><span>' + sampleText + "</span></p>";

  $("#userText").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

function moneyButton() {
  let text = "Click here !";
  let URL = "https://www.youtube.com/watch?v=n1apQ00sxNs";
  let message = "<b>Good job</b>, you have find the secret button ! ";

  //document.getElementById("botText").innerHTML = '<p class="botText"><span>' + message + text.link(URL) + '</span></p>';
  buttonSendText(message + text.link(URL));
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
