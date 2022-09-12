const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "maroon",
  "purple",
  "Aqua",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  console.log(`aiyo`);
  console.log(document.body);
  console.log(`aiyo`);
  //get random number between 0 and 3
  const randomNumber = Math.floor(getRandomNumber());
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
let getRandomNumber = () => {
  return Math.random() * colors.length;
};
