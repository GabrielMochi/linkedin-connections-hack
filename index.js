const scrollToBottom = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

const scrollInterval = setInterval(scrollToBottom, 1000);

const stopScrolling = () => {
  clearInterval(scrollInterval);
};

const sendInvites = () => {
  const inviteButtons = document.querySelectorAll('button[data-control-name="invite"]');
  inviteButtons.forEach(el => el.click());
};

setTimeout(() => {
  stopScrolling();
  sendInvites();
}, 5 * 60 * 6000); // 5 minutes
