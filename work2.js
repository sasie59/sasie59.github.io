function sendMessage(e) {
  // prevent 防止 default 預設
  e.preventDefault();
  const messageName = document.getElementById("name");
  const messageText = document.getElementById("text");

  const mesesageBlock = document.getElementById('mesesage-block');
  const newMessage =
    '<div class="message">' +
      '<div class="name">' + messageName.value + '</div>' +
      '<div class="text">' + messageText.value.replace("\n", "<br />") + '</div>' +
    '</div>';

  // e = Event 觸發事件變數 (包括了觸發者…等屬性)
  mesesageBlock.innerHTML = newMessage + mesesageBlock.innerHTML;

  messageName.value = "";
  messageText.value = "";
}
function snedMessage(e) {
  e.preventDefault();
  const messageName = document.getElementById("name");
  const messageText = document.getElementById("text");
  const messageBlock = document.getElementById("message-block");
}
document.getElementById("message-form").addEventListener("submit", sendMessage);
document.getElementById("message-form").addEventListener("submit", sendMessage);
