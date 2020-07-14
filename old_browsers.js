function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

const scrollInterval = setInterval(scrollToBottom, 1000);

function stopScrolling() {
  clearInterval(scrollInterval);
}

function sendInvites() {
  const inviteButtons = document.querySelectorAll('button[data-control-name="invite"]');

  inviteButtons.forEach(function (el) {
    el.click();
  });
}

setTimeout(function () {
  stopScrolling();
  sendInvites();
}, 5 * 60 * 1000); // 5 minutes
