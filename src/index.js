import {CreateHomePage} from "./home.js";
import {CreateMenuPage} from "./menu.js";
import {CreateAboutPage} from "./about.js";
import "./style.css";
import "./style-home.css";
import "./style-menu.css";
import "./style-about.css";

function PageIndex () {
    const buttons = document.querySelectorAll("button");
    const containerDiv = document.querySelector(".container");

    function PageLoader (e) {
        while (containerDiv.firstChild) {
            containerDiv.removeChild(containerDiv.firstChild);
        }

        switch (e.target.dataset.value) {
            case 'home':
                CreateHomePage();
                break;
            case 'menu':
                CreateMenuPage();
                break;
            case 'about':
                CreateAboutPage();
                break;
            default:
                CreateHomePage();
        }
    }

    buttons.forEach(element => {
        element.addEventListener("click", PageLoader);
    });

    CreateHomePage();
}

PageIndex();
