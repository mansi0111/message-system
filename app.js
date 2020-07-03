(function () {
  const form = document.querySelector("#message-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const message = document.querySelector("#message");
    const feedback = document.querySelector(".feedback");
    const content = document.querySelector(".message-content");
    if (message.value === "") {
      feedback.classList.add("show");
      setTimeout(function () {
        feedback.classList.add("feedback");
      }, 3000);
    } else {
      content.textContent = message.value;
      message.value = "";
    }
  });
})();
