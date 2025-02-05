import "./styles.css";
import * as homePage from "./page-load.js";
import * as MenuPage from "./menu-page.js";
import * as AboutPage from "./about-page.js";

(function () {
    const content = document.querySelector('#content');
    const btns = document.querySelectorAll('button');
    homePage.load();

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            switch (btn.id) {
                case 'home':
                    content.innerHTML = '';
                    homePage.load();
                    break;
                case 'menu':
                    content.innerHTML = '';
                    MenuPage.load();
                    break;
                case 'about':
                    content.innerHTML = '';
                    AboutPage.load();
                    break;
                case 'reservations':
                    alert('this is not a real website my boy');
                    break;
            }
        })
    });
})()