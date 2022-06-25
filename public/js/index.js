const bookBtn = document.querySelector("#b-btn");
const dowBtn = document.querySelector("#d-btn");

bookBtn.addEventListener("click", () => {
  window.location.href = "/bookAdmin";
  // console.log("cliked");
});
dowBtn.addEventListener("click", () => {
  //   console.log("cliked");
  window.location.href = "/download";
});
