const bookBtn = document.querySelector("#b-btn");
const bookUser = document.querySelector("#d-btn");

bookBtn.addEventListener("click", () => {
  window.location.href = "/book";
  // console.log("cliked");
});
bookUser.addEventListener("click", () => {
  //   console.log("cliked");
  window.location.href = "/bookUser";
});
