let btn = document.querySelector("#btn");
let sharedA = 25;
btn.onclick = (evt) => {
  console.log("btn clicked");
  sharedA++;
  console.log(sharedA);
  console.log(evt);
};

btn.addEventListener("click", () => {
  console.log("btn is clicked");
});
btn.addEventListener("click", (e) => {
  console.log("btn is clicked second");
  console.log(e);
  console.log(e.type);
});

let currentMode = "light";
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (currentMode == "light") {
    currentMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currentMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
