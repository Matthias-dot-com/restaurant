import Img from "./home.jpg";
export default function createHome() {
  const img = new Image();
  img.src = Img;
  const div = document.createElement("div");
  div.classList.add("home");
  div.appendChild(img);
  return div;
}
