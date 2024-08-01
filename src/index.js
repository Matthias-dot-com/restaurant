import createHome from "./home";
import createMenu from "./menu";
import aboutUs from "./about";
import "./style.css";

const menuBtn = document.querySelector("nav button:nth-child(2)");
menuBtn.addEventListener('click', function (){
    document.querySelector("div#content").innerHTML ="";
    document.querySelector("div#content").appendChild(createMenu())
});
const aboutBtn = document.querySelector("nav button:nth-child(3)");
aboutBtn.onclick = aboutUs;


const homeBtn = document.querySelector("nav button:nth-child(1");
homeBtn.addEventListener('click',()=>{
    document.querySelector("div#content").innerHTML ="";
    document.querySelector("div#content").appendChild(createHome());

})
document.querySelector("div#content").appendChild(createHome());
