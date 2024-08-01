import createHome from "./home";
import createMenu from "./menu";
import aboutUs from "./about";
import "./style.css";
// createHome();
const homeBtn = document.querySelector("nav button:nth-child(2)");
homeBtn.onclick = createMenu;
const aboutBtn = document.querySelector("nav button:nth-child(3)");
aboutBtn.onclick = aboutUs;
